export interface ContactFormPayload {
  formType?: 'contact' | 'work';
  fullName?: string;
  name?: string;
  workEmail?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  projectRequirement?: string;
  requirements?: string;
  budget?: string;
  files?: File[];
}

export interface SendResult {
  success: boolean;
  message?: string;
  error?: string;
}

/** Reads a File object into a base64 string */
async function fileToBase64(file: File): Promise<{ name: string; content: string; type: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Format: "data:application/pdf;base64,JVBERi0xLjQK..." -> extract just the base64 part
      const base64Index = result.indexOf(';base64,');
      const base64Content = base64Index !== -1 ? result.substring(base64Index + 8) : result;
      resolve({
        name: file.name,
        content: base64Content,
        type: file.type || 'application/octet-stream',
      });
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export async function sendEnquiry(payload: ContactFormPayload): Promise<SendResult> {
  try {
    let processedFiles: { name: string; content: string; type: string }[] = [];
    
    if (payload.files && payload.files.length > 0) {
      processedFiles = await Promise.all(payload.files.map(fileToBase64));
    }

    const bodyData = {
      ...payload,
      files: processedFiles,
    };

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(bodyData),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return {
        success: false,
        error: data.error || 'Failed to submit enquiry. Please try again.',
      };
    }

    return {
      success: true,
      message: data.message || 'Your enquiry has been received successfully.',
    };
  } catch (error: any) {
    console.error('Contact service dispatch error:', error);
    return {
      success: false,
      error: error.message || 'A network error occurred. Please try again later.',
    };
  }
}

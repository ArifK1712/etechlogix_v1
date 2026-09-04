export default async function handler(req: any, res: any) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} not allowed` });
  }

  const postmarkToken =
    process.env.POSTMARK_SERVER_TOKEN ||
    process.env.POSTMARK_API_TOKEN ||
    process.env.POSTMARK_API_KEY ||
    process.env.POSTMARK_TOKEN ||
    process.env.POSTMARK_SERVER_API_TOKEN;
  const fromEmail =
    process.env.FROM_EMAIL ||
    process.env.POSTMARK_FROM_EMAIL ||
    process.env.POSTMARK_FROM ||
    process.env.POSTMARK_SENDER_EMAIL ||
    'contact@etechlogix.com';
  const toEmail =
    process.env.TO_EMAIL ||
    process.env.POSTMARK_TO_EMAIL ||
    process.env.POSTMARK_TO ||
    process.env.POSTMARK_RECIPIENT_EMAIL ||
    'contact@etechlogix.com';

  if (!postmarkToken) {
    console.error('Missing POSTMARK_SERVER_TOKEN in environment variables.');
    return res.status(500).json({
      success: false,
      error: 'Email service is not configured. Please set POSTMARK_SERVER_TOKEN in your environment.',
    });
  }

  try {
    const data = req.body || {};
    const {
      formType = 'contact',
      fullName,
      name,
      workEmail,
      email,
      company = 'Not provided',
      phone = 'Not provided',
      service = 'General Enquiry',
      projectRequirement,
      requirements,
      budget,
      files = [],
    } = data;

    const senderName = fullName || name || 'Anonymous';
    const senderEmail = workEmail || email || 'no-reply@etechlogix.com';
    const messageContent = projectRequirement || requirements || 'No details provided.';

    const isWorkForm = formType === 'work';
    const subject = isWorkForm
      ? `[Work Enquiry] New Project Request from ${senderName} (${company})`
      : `[Contact Form] New Message from ${senderName} (${service})`;

    // HTML Email template
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #171717; margin: 0; padding: 24px; background-color: #fafaf8; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
          .header { background: #0a0a0a; color: #ffffff; padding: 24px 32px; border-bottom: 3px solid #df012a; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 600; }
          .header p { margin: 4px 0 0; font-size: 13px; color: #a3a3a3; }
          .content { padding: 32px; }
          .field-group { margin-bottom: 20px; }
          .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; margin-bottom: 4px; }
          .field-value { font-size: 15px; color: #0a0a0a; font-weight: 500; }
          .message-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-top: 8px; font-size: 14px; white-space: pre-wrap; color: #262626; }
          .grid { display: table; width: 100%; }
          .col { display: table-cell; width: 50%; vertical-align: top; }
          .footer { background: #fafafa; border-top: 1px solid #e5e7eb; padding: 16px 32px; font-size: 12px; color: #737373; text-align: center; }
        </style>
      </head>
      <body>
        <div className="container" style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="background: #0a0a0a; color: #ffffff; padding: 24px 32px; border-bottom: 3px solid #df012a;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; width: 100%;">
              <tr>
                <td align="left" valign="middle" style="vertical-align: middle; padding-right: 16px; width: 105px;">
                  <img src="https://d1o4s320mkx6gb.cloudfront.net/etechlogix/assets/images/footer-logo.png" alt="eTechLogix" width="95" style="display: block; width: 95px; max-width: 100%; height: auto; border: 0;" />
                </td>
                <td align="right" valign="middle" style="vertical-align: middle; text-align: right;">
                  <h1 style="margin: 0; font-size: 18px; font-weight: 600; color: #ffffff; line-height: 1.3;">${isWorkForm ? 'New Project Enquiry' : 'New Contact Enquiry'}</h1>
                  <p style="margin: 4px 0 0; font-size: 12px; color: #a3a3a3; line-height: 1.4;">Submitted via eTechLogix Website</p>
                </td>
              </tr>
            </table>
          </div>
          <div style="padding: 32px;">
            <div style="margin-bottom: 20px;">
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; margin-bottom: 4px;">Full Name</div>
              <div style="font-size: 15px; color: #0a0a0a; font-weight: 500;">${senderName}</div>
            </div>
            
            <div style="margin-bottom: 20px;">
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; margin-bottom: 4px;">Email Address</div>
              <div style="font-size: 15px; color: #df012a; font-weight: 500;"><a href="mailto:${senderEmail}" style="color: #df012a; text-decoration: none;">${senderEmail}</a></div>
            </div>

            <div style="margin-bottom: 20px;">
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; margin-bottom: 4px;">Company</div>
              <div style="font-size: 15px; color: #0a0a0a;">${company}</div>
            </div>

            <div style="margin-bottom: 20px;">
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; margin-bottom: 4px;">Phone Number</div>
              <div style="font-size: 15px; color: #0a0a0a;">${phone}</div>
            </div>

            ${
              isWorkForm && budget
                ? `
            <div style="margin-bottom: 20px;">
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; margin-bottom: 4px;">Project Budget</div>
              <div style="font-size: 15px; color: #0a0a0a;">${budget}</div>
            </div>`
                : ''
            }

            ${
              !isWorkForm && service
                ? `
            <div style="margin-bottom: 20px;">
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; margin-bottom: 4px;">Requirement / Service Area</div>
              <div style="font-size: 15px; color: #0a0a0a;">${service}</div>
            </div>`
                : ''
            }

            <div style="margin-bottom: 20px;">
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; margin-bottom: 4px;">Project Details / Message</div>
              <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-top: 8px; font-size: 14px; white-space: pre-wrap; color: #262626;">${messageContent}</div>
            </div>

            ${
              (files || []).length > 0
                ? `
            <div style="margin-bottom: 20px;">
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; margin-bottom: 4px;">Attached Files (${(files || []).length})</div>
              <div style="font-size: 14px; color: #0a0a0a;">
                <ul style="margin: 4px 0 0; padding-left: 20px;">
                  ${(files || []).map((f: any) => `<li><strong>${f.name}</strong></li>`).join('')}
                </ul>
              </div>
            </div>`
                : ''
            }
          </div>
          <div style="background: #fafafa; border-top: 1px solid #e5e7eb; padding: 16px 32px; font-size: 12px; color: #737373; text-align: center;">
            This email was sent from the eTechLogix website contact system.
          </div>
        </div>
      </body>
      </html>
    `;

    // Text Body
    const textBody = `
New Enquiry from eTechLogix Website:
----------------------------------------
Name: ${senderName}
Email Address: ${senderEmail}
Company: ${company}
Phone: ${phone}
${isWorkForm && budget ? `Budget: ${budget}\n` : ''}
${!isWorkForm ? `Service: ${service}\n` : ''}
Message / Requirements:
${messageContent}
----------------------------------------
    `;

    // Process attachments for Postmark
    const attachments = (files || []).map((file: any) => ({
      Name: file.name,
      Content: file.content, // base64 encoded
      ContentType: file.type || 'application/octet-stream',
    }));

    const postmarkPayload: any = {
      From: fromEmail,
      To: toEmail,
      ReplyTo: senderEmail,
      Subject: subject,
      HtmlBody: htmlBody,
      TextBody: textBody,
      MessageStream: 'outbound',
    };

    if (attachments.length > 0) {
      postmarkPayload.Attachments = attachments;
    }

    const postmarkResponse = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': postmarkToken,
      },
      body: JSON.stringify(postmarkPayload),
    });

    const responseData = (await postmarkResponse.json()) as any;

    if (!postmarkResponse.ok) {
      console.error('Postmark API Error:', responseData);
      return res.status(postmarkResponse.status).json({
        success: false,
        error: responseData.Message || 'Failed to send email via Postmark',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry sent successfully',
      messageId: responseData.MessageID,
    });
  } catch (error: any) {
    console.error('Submission error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error while processing enquiry',
    });
  }
}

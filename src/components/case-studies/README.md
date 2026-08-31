# Selected Work

This section is mounted only by `WorkPage`, immediately after its existing hero.
The `case-studies` section ID is the hero's existing smooth-scroll destination.

## Content approval required

The three entries in `selectedWork.ts` are editorial drafts based on the supplied
event-platform example and the site's existing services. They are not verified
client case studies. No clients, testimonials, or performance outcomes have been
invented. Approve/replace the copy and set each `href` to its actual case-study
destination before publication. Until then, the link treatment is visibly
present but non-navigable and exposed as disabled to assistive technology.

`ProjectVisual.tsx` displays original AI-generated editorial business imagery,
not photographs of actual clients or staff. Images fill the unchanged 4:3 boxes.
The asset paths and exact generation prompts are recorded in
`public/images/case-studies/README.md`.

## Design and checks

- Existing `type-eyebrow-accent`, `type-section-heading-lg`,
  `type-section-heading`, `type-body`, and `type-button` typography.
- Standard 1400px container, 20px horizontal gutters, and 768px/1024px breakpoints.
- Equal desktop columns alternate visual/content; DOM order always puts the
  visual first, so mobile reads visual, category, title, description, link.
- Hover effects and GSAP entry reveals respect reduced-motion preferences.
- No changes to the hero, global styles, navigation, footer, or other pages.

## Generated reference

A draft section composition was generated with the built-in image-generation
tool, then used to guide the original code-native visuals. This historical layout
reference is preview-only. The interface illustrations have since been replaced
with editorial business imagery at the user's request; the layout is unchanged.

Prompt used:

```text
Use case: ui-mockup. Asset type: one section design reference for the existing eTechLogix enterprise website. Create a readable landscape 1920x1440 design comp for a Selected Work section ONLY, no navbar, hero, footer. White background, existing Poppins font, charcoal text, restrained #DF012A red accents. Broad 1400px content container, generous 64px spacing, open alternating editorial rows with precisely half width visual and half content. At top left red small monospaced tracked eyebrow 'SELECTED WORK', short red rule below, bold 44px heading 'Real challenges.' on first line and 'Engineered outcomes.' second line with final red dot. Then three project rows: row1 large event operations browser UI visual LEFT, content RIGHT: 'ENTERPRISE PLATFORM', 'Transforming complex event operations into one connected ecosystem.', paragraph 'A scalable platform connecting registration, payments, workflows, badge management and operational reporting.', restrained underlined 'Explore Case Study →'. Row2 content LEFT, large document processing interface RIGHT: 'DOCUMENT AUTOMATION', 'Turning documents into business-ready information.', 'Document understanding, validation and review connected in one practical workflow.', same link. Row3 large enterprise integration workflow canvas LEFT, content RIGHT: 'ENTERPRISE INTEGRATIONS', 'Connecting the systems behind everyday operations.', 'Applications, data and business processes brought together in a coordinated enterprise workflow.', same link. Project visuals original and crisp UI illustrations, not photos, no client logos, no performance statistics. First browser: clean light event operations view showing event name, registrations list, compact badge preview. Second: clean side by side source invoice and extracted fields with red highlight on one extracted field. Third: a clean app integration canvas with CRM, ERP, Finance and Operations nodes connected with thin red lines. These visuals should be large and premium, placed on very soft neutral rectangular stage, modest 16px radius, no enclosing row cards, no nested card spam, no heavy shadows, no busy dashboards. Content titles ~30px semibold, descriptions18px gray. Keep all rows equal in width and breathe. This is a draft layout comp not evidence of actual customer work.
```

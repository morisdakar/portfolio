# Moris Dakar — standalone portfolio

This is a portable copy of **Event videography portfolio website**, made from the HTML you supplied and the images recovered from your published Canva site.

## Open it

Open `index.html` in a browser. Keep the whole folder together. The images, fonts, styles and icons are included locally. No Canva account, application server, or installation is needed to view the site. YouTube, Instagram, telephone and email links open their respective external services.

For hosting, upload the contents of this folder to a static website host. This copy has not been published or connected to a domain.

## What changed

- Kept the original dark teal design, content, twelve projects, and contact details.
- Saved all thirteen Canva images and the three existing Pexels images as local files.
- Removed Canva's telemetry, editing, resizing and data scripts.
- Compiled the styles into a local stylesheet and embedded the icons.
- Preserved project filtering and mobile navigation; added Escape handling.
- Made content readable when JavaScript is unavailable and adjusted narrow-screen heading/footer layout.
- Connected the contact form to Formspree at `https://formspree.io/f/mzedrwqy`. Visitors can submit enquiries directly; success appears only after Formspree accepts the request. Failed requests preserve the entered details.
- Corrected the project-details instruction to be placeholder text instead of a prefilled answer.
- Changed showreel links to ordinary YouTube watch links.

## Still needs your content

These five entries did not contain public video links. Their buttons now open an email requesting the relevant video:

1. Sony Alpha Universe — Creative Crib
2. Sheikh Mansour Bin Zayed Agricultural Excellence Award
3. Extreme Week Abu Dhabi
4. Wedding Recap Video
5. Le Ciel

The Le Ciel link was incorrectly pointing to the Vivo campaign. It now uses Request video until the correct URL is supplied. The Le Ciel and YouTube stock images remain from the supplied design; no verified replacements were found in the older site. The Sa7ten title tile also remains.

The contact form is connected to your Formspree endpoint. The receiving address is controlled in Formspree; ensure its verified notification destination is `info@morisdakar.com`. The site cannot determine that private account setting from the endpoint alone.

Browser checks simulate successful submissions, rejected submissions and network errors without sending test emails. Actual inbox delivery still needs a live submission. The form also supports standard submission without JavaScript and a hosted submission fallback for verification requirements. Preview through a local web server or host the site over HTTPS when testing the form.

## Continue editing

- `index.html`: text, project cards and destination links.
- `site.js`: navigation, filtering and contact-form submission behavior.
- `styles.css`: ready-to-use compiled styling.
- `assets/images/`: image files with descriptive names.
- `asset-map.json`: mapping from original image elements to local files.
- `src/styles.css` and `tailwind.config.cjs`: source styling for future builds using Tailwind CSS 3.4.17. If you introduce new utility classes, rebuild the stylesheet. Ordinary text/link edits do not need a build.

Icons: Lucide 0.577.0 (ISC license in `licenses/`). Font: Open Sans. Original portfolio text and media remain attributed to their respective owners; this conversion does not change their rights.

## Updates from the older website

Compared against `portfolio-main 2/index.html` and its two archived HTML versions.

- About: replaced the stock cinematographer image with `image/Profile.jpg`, the portrait used by the older website.
- Sheikh Mansour award: replaced the unrelated Sony presentation picture with `image/SMAEA.png`; the whole award composition is displayed without cropping.
- Corrected mismatched image descriptions for the showreel and several projects.
- Confirmed the new site's showreel, The Old Poplar, CryptoFightNight, Vivo, SQUATWOLF and Kareem & Christina links match the older site's main page. This is a source comparison, not a guarantee that external videos remain available.
- Replaced the incorrect Le Ciel destination with a project-specific email request.
- The older files do not resolve the remaining project destinations. Archived links to other productions were not assigned to unrelated projects.

## Thumbnail and article updates

- Removed grayscale, desaturation, darkening and contrast filters from project thumbnails in normal and hover states. Hover keeps only the zoom effect.
- Removed darkening and grain effects from the showreel and YouTube thumbnails.
- Sony MEA / Dubai Press Club now has a View article button and clickable thumbnail linking to the user-confirmed BroadcastPro ME article: https://www.broadcastprome.com/news/sony-mea-joins-arab-podcast-programme-to-train-emerging-content-creators/

## Name and About copy

Updated all website text, metadata, image descriptions and form subject to Moris. Removed the portrait caption panel and replaced the About heading, paragraphs and signature with the exact copy from the supplied older website’s main HTML.

## Header wording

The earlier camera-photo header is restored with its original image, crop, typography, buttons and navigation placement. Only its wording is changed to MORIS DAKAR and VIDEO PRODUCTION AND MARKETING MANAGEMENT; the duplicate small name line is empty.

## YouTube and 35AWARDS

The combined text-only section uses the exact HTML content of the supplied older index.html: two equal cards on desktop, YouTube on the left and awards on the right, with the same headings, paragraphs, button and three rankings. The cards stack on smaller screens. At the user’s direction, no photograph or laurel artwork is displayed in this section. Scoped styles reproduce the original typography, borders, spacing and responsive layout.

## Services

The Services section reproduces the supplied morisdakar.com template: “What I Shoot,” eight services with original descriptions and Font Awesome icons, in four desktop columns, two tablet columns, and one mobile column. Icons are bundled locally; their license is in licenses/fontawesome.txt.

## Visual consistency update

Section headings use a shared responsive scale, Services and the YouTube/awards cards align with the main page margins, portfolio filters occupy their own row, and the menu follows the page order. The opening photograph uses neutral top and bottom gradients and a mobile-specific focal position. All five Request video links remain unchanged.

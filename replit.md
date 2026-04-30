# Olivar Global Sales - Landing Page

## Project Overview
A static landing page for **Olivar Global Sales**, a B2B prospecting and sales services company targeting the USA market. The page is in Portuguese (pt-BR).

## Tech Stack
- **Frontend**: Pure HTML5, CSS3, and Vanilla JavaScript (no build system)
- **Fonts**: Inter via Google Fonts CDN
- **Integrations**: HubSpot CRM (form submissions), WhatsApp redirect

## Project Structure
- `index.html` — Single-page site with embedded CSS and JavaScript
- `images/` — Visual assets
  - `prova-social/` — Social proof testimonial images (prova-01.jpg to prova-09.jpg)

## Running the App
The app is served via Python's built-in HTTP server:
- **Workflow**: `Start application`
- **Command**: `python3 -m http.server 5000 --bind 0.0.0.0`
- **Port**: 5000

## Deployment
- **Target**: Static site
- **Public directory**: `.` (project root)

## Key Features
- Responsive design (mobile + desktop)
- HubSpot lead capture form
- WhatsApp redirect on form submission
- Scroll animations (IntersectionObserver)
- Image slider for social proof gallery
- LocalStorage form auto-save
- SEO: Open Graph, Twitter Cards, Schema.org structured data

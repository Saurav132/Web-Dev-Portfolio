# API Contracts & Integration Plan

## Overview
This document defines the contracts between frontend and backend for Saurav Dhapola's Portfolio Website with Sanity CMS integration.

## Current Status
✅ **Frontend Complete** - All components built with mock data (`/app/frontend/src/mock.js`)
⏳ **Backend Pending** - Sanity CMS integration to be implemented

---

## Sanity CMS Schema Structure

### 1. Hero Content
```javascript
{
  _type: 'hero',
  headline: string,
  subheadline: string,
  name: string,
  trustBadges: array of { icon: string, text: string }
}
```

### 2. About Section
```javascript
{
  _type: 'about',
  title: string,
  description: text
}
```

### 3. Services
```javascript
{
  _type: 'service',
  title: string,
  description: text,
  icon: string,
  order: number
}
```

### 4. Process Steps
```javascript
{
  _type: 'process',
  step: number,
  title: string,
  description: text
}
```

### 5. Projects
```javascript
{
  _type: 'project',
  title: string,
  description: text,
  image: image,
  problem: text,
  features: array of strings,
  tech: array of strings,
  liveLink: url,
  codeLink: url,
  order: number
}
```

### 6. Skills
```javascript
{
  _type: 'skills',
  skillsList: array of strings
}
```

### 7. Why Choose Me
```javascript
{
  _type: 'benefit',
  title: string,
  description: text,
  icon: string,
  highlight: boolean,
  order: number
}
```

### 8. Pricing Plans
```javascript
{
  _type: 'pricingPlan',
  name: string,
  price: string,
  description: string,
  features: array of strings,
  popular: boolean,
  buttonText: string,
  order: number
}
```

### 9. Testimonials
```javascript
{
  _type: 'testimonial',
  name: string,
  business: string,
  text: text,
  rating: number,
  image: image
}
```

### 10. Contact Information
```javascript
{
  _type: 'contact',
  whatsapp: string,
  email: string,
  social: {
    github: url,
    linkedin: url,
    twitter: url
  }
}
```

---

## Backend API Endpoints

### Base URL: `/api`

#### 1. GET `/api/content/hero`
Returns hero section content
```json
{
  "success": true,
  "data": { ...hero content }
}
```

#### 2. GET `/api/content/about`
Returns about section content

#### 3. GET `/api/content/services`
Returns array of services

#### 4. GET `/api/content/process`
Returns array of process steps

#### 5. GET `/api/content/projects`
Returns array of projects with images

#### 6. GET `/api/content/skills`
Returns skills list

#### 7. GET `/api/content/benefits`
Returns why choose me benefits

#### 8. GET `/api/content/pricing`
Returns pricing plans

#### 9. GET `/api/content/testimonials`
Returns testimonials

#### 10. GET `/api/content/contact`
Returns contact information

#### 11. POST `/api/contact/submit`
Submits contact form
```json
Request: {
  "name": "string",
  "email": "string",
  "message": "string"
}

Response: {
  "success": true,
  "message": "Message received successfully"
}
```

---

## Frontend Integration Steps

### Current Implementation
- All data is loaded from `/app/frontend/src/mock.js`
- Components use `mockData` object for content
- No API calls are made yet

### Post-Backend Integration
1. Create Sanity client utility (`/app/frontend/src/utils/sanityClient.js`)
2. Create API service layer (`/app/frontend/src/services/contentService.js`)
3. Replace mock data imports with API calls
4. Add loading states and error handling
5. Implement data caching for better performance

---

## Sanity CMS Configuration

### Project Details
- Project ID: `cn3xb5zm`
- Dataset: `production`
- API Token: (stored in backend .env)

### Backend Setup Tasks
1. Install `@sanity/client` in backend
2. Create Sanity schema definitions
3. Configure Sanity client with credentials
4. Build API endpoints to fetch from Sanity
5. Handle image URLs from Sanity CDN
6. Implement caching layer (optional)

### Frontend Setup Tasks
1. Replace mock data with API calls
2. Add loading skeletons
3. Handle API errors gracefully
4. Add retry logic for failed requests
5. Cache responses in localStorage (optional)

---

## Mock Data Mapping

All mock data fields correspond 1:1 with Sanity schema fields:

- `mockData.hero` → Sanity `hero` document
- `mockData.about` → Sanity `about` document
- `mockData.services` → Sanity `service` documents
- `mockData.process` → Sanity `process` documents
- `mockData.projects` → Sanity `project` documents
- `mockData.skills` → Sanity `skills` document
- `mockData.whyChooseMe` → Sanity `benefit` documents
- `mockData.pricing` → Sanity `pricingPlan` documents
- `mockData.testimonials` → Sanity `testimonial` documents
- `mockData.contact` → Sanity `contact` document

---

## Notes
- Form submission is currently mocked with toast notification
- Real submission will send data to backend `/api/contact/submit`
- WhatsApp integration is functional (no backend needed)
- Social links currently point to `#` placeholders
- All Unsplash images in projects are placeholders

# AALCS Gallery Page Editing Manual

This manual explains how to safely edit `app/gallery/page.tsx` so changes appear correctly on your website gallery page.

---

## 1. The main idea

Your gallery page is controlled by the data inside:

```tsx
const gallerySections = [
  ...
];
```

Most edits happen inside this data area.

The website structure is:

```txt
Service Area
  Service / Package
    Job Category
      Job
        Before Images
        After Images
```

Example:

```txt
Residential Lawn Mowing
  Standard Residential Lawn Maintenance
    Regular Residential Mowing Jobs
      Job 1
        before-1.jpg
        before-2.jpg
        after-1.jpg
        after-2.jpg
```

---

## 2. How to change a service or package name

Find the service/package object you want to rename.

Example:

```tsx
{
  title: "Standard Residential Lawn Maintenance",
```

Change only the text inside the quotation marks:

```tsx
{
  title: "Standard Lawn Mowing Service",
```

Save the file.

The website will now show the new name.

Important: Do not remove the comma after the line.

Correct:

```tsx
title: "Standard Lawn Mowing Service",
```

Wrong:

```tsx
title: "Standard Lawn Mowing Service"
```

---

## 3. How to change a job category name

Find this line inside the service/package:

```tsx
jobCategory: "Regular Residential Mowing Jobs",
```

Change the text:

```tsx
jobCategory: "Standard Residential Before & After Jobs",
```

Save the file.

---

## 4. How to change a job name

Find the job inside the `jobs` list.

Example:

```tsx
{
  title: "Standard Residential Lawn Maintenance — Job 1",
  location: "Innisfail, QLD",
```

Change the title:

```tsx
{
  title: "Innisfail Front Yard Lawn Clean-Up",
  location: "Innisfail, QLD",
```

Save the file.

---

## 5. How to change a job location

Find:

```tsx
location: "Innisfail, QLD",
```

Change it to the correct location:

```tsx
location: "Mourilyan, QLD",
```

Save the file.

---

## 6. How to remove a service or package

A service/package looks like this:

```tsx
{
  title: "Standard Residential Lawn Maintenance",
  description: "...",
  includes: [
    "Professional lawn mowing",
    "Precision edging",
  ],
  jobCategory: "Regular Residential Mowing Jobs",
  jobs: [
    ...
  ],
},
```

To remove it, delete the entire object from the opening `{` to the closing `},`.

Important:
- Delete the whole block only.
- Make sure the remaining items still have commas between them.
- If it was the last item in the list, the previous item can keep or remove its comma. Either is usually okay in modern TypeScript.

---

## 7. How to remove one job

A job looks like this:

```tsx
{
  title: "Innisfail Residential Lawn Maintenance",
  location: "Innisfail, QLD",
  beforeImages: [
    "/gallery/.../before-1.jpg",
  ],
  afterImages: [
    "/gallery/.../after-1.jpg",
  ],
},
```

Delete the full job block.

Do not delete only the title or only the image lines.

---

## 8. How to remove one image from a job

Find either `beforeImages` or `afterImages`.

Example:

```tsx
beforeImages: [
  "/gallery/mowing/job-1/before/before-1.jpg",
  "/gallery/mowing/job-1/before/before-2.jpg",
  "/gallery/mowing/job-1/before/before-3.jpg",
],
```

To remove image 2, delete this line:

```tsx
"/gallery/mowing/job-1/before/before-2.jpg",
```

Result:

```tsx
beforeImages: [
  "/gallery/mowing/job-1/before/before-1.jpg",
  "/gallery/mowing/job-1/before/before-3.jpg",
],
```

Save the file.

---

## 9. How to add a new image to a job

First, place the image inside the correct folder.

Example folder:

```txt
public/gallery/residential-lawn-mowing/standard-residential-lawn-maintenance/job-1/before/
```

Add your image, for example:

```txt
before-4.jpg
```

Then add the matching path inside `beforeImages`:

```tsx
beforeImages: [
  "/gallery/residential-lawn-mowing/standard-residential-lawn-maintenance/job-1/before/before-1.jpg",
  "/gallery/residential-lawn-mowing/standard-residential-lawn-maintenance/job-1/before/before-2.jpg",
  "/gallery/residential-lawn-mowing/standard-residential-lawn-maintenance/job-1/before/before-4.jpg",
],
```

For after photos, do the same inside `afterImages`.

---

## 10. How to add a new job

Step 1: Create a new job folder.

Example:

```txt
public/gallery/residential-lawn-mowing/standard-residential-lawn-maintenance/job-6/
```

Inside it, create:

```txt
before/
after/
```

Add photos:

```txt
before/before-1.jpg
before/before-2.jpg
after/after-1.jpg
after/after-2.jpg
```

Step 2: Add a new job object inside the correct `jobs` list.

Example:

```tsx
{
  title: "Innisfail Residential Lawn Maintenance — Job 6",
  location: "Innisfail, QLD",
  beforeImages: [
    "/gallery/residential-lawn-mowing/standard-residential-lawn-maintenance/job-6/before/before-1.jpg",
    "/gallery/residential-lawn-mowing/standard-residential-lawn-maintenance/job-6/before/before-2.jpg",
  ],
  afterImages: [
    "/gallery/residential-lawn-mowing/standard-residential-lawn-maintenance/job-6/after/after-1.jpg",
    "/gallery/residential-lawn-mowing/standard-residential-lawn-maintenance/job-6/after/after-2.jpg",
  ],
},
```

Save the file.

---

## 11. How to hide a job without deleting it

You can comment it out.

Use:

```tsx
/*
{
  title: "Job I want to hide",
  location: "Innisfail, QLD",
  beforeImages: [
    "/gallery/example/before-1.jpg",
  ],
  afterImages: [
    "/gallery/example/after-1.jpg",
  ],
},
*/
```

This keeps the job in the file but hides it from the website.

---

## 12. Very important editing rules

Always follow these rules:

1. Keep quotation marks around text.
2. Keep commas after lines inside objects.
3. Image paths must start with `/gallery/`.
4. Do not include `/public` in the image path.
5. Folder names and file names must match exactly.
6. If the image file is `.JPG` but the code says `.jpg`, it may not load.
7. Save the file after editing.
8. Restart the website if the image does not appear.

Correct image path:

```tsx
"/gallery/residential-lawn-mowing/example/job-1/before/before-1.jpg"
```

Wrong image path:

```tsx
"/public/gallery/residential-lawn-mowing/example/job-1/before/before-1.jpg"
```

---

## 13. Quick checklist after editing

Before checking the website, confirm:

```txt
[ ] I saved page.tsx
[ ] The image exists in public/gallery
[ ] The code path starts with /gallery
[ ] The file name matches exactly
[ ] The commas are still correct
[ ] The page has no red TypeScript errors
```

---

## 14. Best naming system

Use simple lowercase folder names with hyphens:

```txt
standard-residential-lawn-maintenance
job-1
before-1.jpg
after-1.jpg
```

Avoid:

```txt
Standard Residential Lawn Maintenance
Job One
Before Image Final Copy.JPG
```

Simple names prevent broken images and website errors.

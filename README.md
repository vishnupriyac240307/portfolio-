# Vishnu Priya Portfolio

A modern responsive React + Vite portfolio created from the details in Vishnu Priya Chinnasamy's resume.

## 1. Run the project

Open the folder in VS Code, then open the terminal and run:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## 2. Update your links

Open:

```text
src/data.js
```

Replace these values inside `profile`:

- `YOUR_EMAIL@gmail.com`
- `https://www.linkedin.com/in/YOUR-LINKEDIN`
- `https://github.com/YOUR-GITHUB`

Also replace every project `github: "#"` and `demo: "#"` with the correct links.

## 3. Resume and photo

- Photo: `src/assets/vishnu-priya.png`
- Resume: `public/Vishnu_Priya_Chinnasamy_Resume.pdf`

The Resume buttons already download this PDF.

## 4. Build for deployment

```bash
npm run build
```

## 5. Push to GitHub

```bash
git init
git add .
git commit -m "Create personal portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 6. Deploy to Vercel

1. Sign in to Vercel.
2. Click **Add New → Project**.
3. Import the GitHub repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**.

## Main editable content

All portfolio content is centralized in:

```text
src/data.js
```

The structure and page layout are in:

```text
src/App.jsx
```

The complete design is in:

```text
src/styles.css
```


## Certificate and IEEE files

Certificate files are stored in:

```text
public/certificates
```

The certificate details and file links are controlled from:

```text
src/data.js
```

Each **Verify / View Certificate** button opens the original uploaded PDF or PNG in a new browser tab.

The IEEE section opens:

```text
public/certificates/ieee-membership-card.pdf
```

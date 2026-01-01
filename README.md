# personal-portfolio

## How to Publish on GitHub Pages

1. **Move your site files to the root or a `docs` folder**
   - For user/organization pages, place `index.html` and all assets in the root of the repository.
   - For project pages, place everything in a `docs` folder and set GitHub Pages source to `docs` in repository settings.

2. **Update all links to use relative paths**
   - Use paths like `./projects.html` or `./docs/projects.html` for navigation.
   - Avoid using `/` at the start of links, as this will break on GitHub Pages.

3. **Configure GitHub Pages**
   - Go to your repository's Settings > Pages.
   - Set the source to the root or `docs` folder.
   - Save and wait for the site to deploy.

4. **HTTPS is automatic**
   - GitHub Pages will serve your site over HTTPS by default. No extra configuration is needed.

5. **Example folder structure for `docs`**
   ```
   docs/
     index.html
     projects.html
     research.html
     public/
       css/
       js/
       components/
   ```

## Troubleshooting

- If you see broken links or missing assets, check your relative paths.
- If you see a "Not Found" error, make sure your files are in the correct folder and the source is set properly in GitHub Pages settings.

---
This portfolio is ready for deployment on GitHub Pages. For more help, see [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages).

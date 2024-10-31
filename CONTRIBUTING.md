# Contributing to React Interview Handbook
Thank you for your interest in contributing to React Interview Handbook! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

* Code of Conduct
* Getting Started
* Project Structure
* Development Workflow
* Content Guidelines
* Translations
* Submitting Changes

## Code of Conduct
By participating in this project, you are expected to uphold our Code of Conduct. Please be respectful and constructive in your communications with others.
## Getting Started

1. Fork the repository
2. Clone your fork:
```bash 
clone https://github.com/kPoziomek/Interview-Handbook.git
```
3. Install dependencies:

```bash
npm install
```
4. Create a new branch:
```bash 
git checkout -b feature/your-feature-name
```
5. Start the development server:
```bash 
npm run dev
```

## Project Structure
```
src/
├── app/                 # Next.js app router pages
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── layout/         # Layout components
│   └── mdx/            # MDX-related components
├── content/            # MDX content files
│   ├── basics/
│   └── advanced/
└── lib/                # Utilities and helpers
```

## Development Workflow

1. Creating New Content
    * Content is written in MDX format
    * Place files in appropriate directories under src/content/
    * Follow the existing file naming convention
    * Include proper frontmatter metadata

2. Adding Components
    * Place new components in appropriate directories
    * Follow the established patterns and styling conventions
    * Include proper TypeScript types
    * Add comments for complex logic

3. Testing
    * Test your changes locally before submitting
    * Ensure responsive design works
    * Check dark mode compatibility

### Content Guidelines

1. Writing Style
    * Clear and concise explanations
    * Code examples should be practical and well-commented
    * Include references where appropriate

2. Structure
    * Start with a brief introduction
    * Use proper headings and subheadings
    * Include practical examples
    * Add key takeaways or summary when appropriate

3. Code Examples
    * Use TypeScript when possible
    * Include comments explaining complex parts
    * Follow React best practices
    * Test examples before submitting

    
### Translations

1. Create a new directory under content with the language code (e.g., content/pl/)
2. Copy the original content structure 
3. Translate the content while maintaining the same MDX structure 
4. Update the language metadata in the frontmatter

### Submitting Changes

1. Before Submitting
    * Ensure all changes are tested
    * Update documentation if needed
    * Follow the code style guidelines
    * Add proper commit messages

2. Pull Request Process
    * Update your fork with the latest changes from main
    * Push your changes to your fork
    * Create a pull request with a clear description
    * Reference any related issues

3. Pull Request Description Include:
    * What changes were made
    * Why these changes are necessary
    * How to test the changes
    * Screenshots if applicable
    * Any potential concerns or questions

4. Review Process
    * A maintainer will review your PR
    * Address any requested changes
    * Once approved, your PR will be merged



### Need Help?
If you have questions or need help, you can:
    * Open an issue for discussion
    * Ask in the discussions section
    * Contact the maintainers directly

Thank you for contributing to React Interview Handbook! 🎉

document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById("editor");
    const preview = document.getElementById("preview");

    const updatePreview = () => {
        preview.innerHTML = marked.parse(editor.value, {breaks: true});
    };

    editor.addEventListener("input", updatePreview);

    editor.value = `# Welcome to Mars Exploration

## Recent Discoveries
- Evidence of ancient microbial life
- Oxygen production from Martian atmosphere
- Rock sample collection

## Future Plans
- [Mars Sample Return mission](https://mars.nasa.gov/msr/)
- First crewed mission (2030s)
- Permanent settlement plans

## Challenges
\`\`\`
- Radiation exposure
- Low gravity effects
- Resource scarcity
\`\`\`

> "Mars is there, waiting to be reached." - Buzz Aldrin

![Mars](https://mars.nasa.gov/system/resources/detail_files/25058_PIA24546-web.jpg)

**The Red Planet awaits!**

Here's some inline code: \`const mars = "red planet";\`

1. First item
2. Second item
3. Third item`;

    updatePreview();
});
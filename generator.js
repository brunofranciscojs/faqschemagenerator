var schema = [];

document.querySelectorAll('*[kbmfaq] > li, .uk-accordion > li').forEach(item => {
    const question = item.firstElementChild.textContent.replace(/\s+/g, ' ').trim()
    const answer = item.firstElementChild.nextElementSibling.textContent.replace(/\s+/g, ' ').trim()
    schema.push({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": answer
        }
    })
    const schemaData = {
        "@context": "http://schema.org/",
        "@type": "FAQPage",
        "mainEntity": schema
    };
    chrome.runtime.sendMessage({ action: "extractedData", data: [schemaData] });
    console.log("Schema Data:", schemaData);
});

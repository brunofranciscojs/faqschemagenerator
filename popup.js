document.addEventListener("DOMContentLoaded", function () {
    const schemaTextArea = document.querySelector("textarea");

    setTimeout(() => {
        chrome.runtime.sendMessage({ action: "getExtractedData" }, function (response) {
            schemaTextArea.value =
                `<script type="application/ld+json">
    ${JSON.stringify(response.data, null, 2)}
</script>`
        });
    }, 500);
    function copySchema(faq) {
        document.querySelector('.message').classList.add('copiou')
        var faqSchema = document.querySelector("textarea");
        faqSchema.select();

        !navigator.clipboard ? document.execCommand("copy") : navigator.clipboard.writeText(faqSchema.value)

        setTimeout(() => {
            document.querySelector('.message').classList.remove('copiou')
        }, 4000)
    }
    document.querySelector('button').addEventListener('click', function () {
        copySchema()
    })

})


function perf(type, name, data, options = "") {
    console.log(`%c${type}: %c${name} | %c${data ? Math.round(data) : ''}ms %c${options}`, "color:red", "color:green", "color:blue", "color:lightblue")
}

window.addEventListener("load", () => {

    // Navigation Timing API
    const navEntries = performance.getEntriesByType("navigation");
    navEntries.forEach(entry => {
        perf("navigation", "fetch-start", entry.fetchStart);
        const ttfb = entry.responseStart - entry.fetchStart;
        perf("navigation", "ttfb", ttfb);
    });

    //old versions (fallback)
    if (navEntries.length == 0) {
        perf("navigation", "fetch-start", performance.timing.fetchStart);
        const ttfb = performance.timing.responseStart - performance.timing.fetchStart;
        perf("navigation", "ttfb", ttfb);
    }

});
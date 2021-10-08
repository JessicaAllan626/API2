let APIKEY='1oO56iSn72SX3mBjGb1DJl8F4yJGPkiv';

    document.addEventListener("DOMContentLoaded", init);
    function init() {
        document.getElementsById("btn").addEventListener("click", ev => {
        ev.preventDefault(); 
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
        let str = document.getElementById("search").value.trim();
        url = url.concat(str);
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(content => {

            console.log(content.data);
            console.log("META", content.meta);

            let fig = document.createElement("figure");
            let img = document.createElement("img");
            let fc = document.createElement("figcaption");
            img.src = content.data[0].images.downsized.url;
            img.alt = content.data[0].title;
            fc.textContent = content.data[0].title;
            let out = document.querySelector(".gallery");
            out.appendChild(fig);
            fig.appendChild(img);
            fig.appendChild(fc);
            out.insertAdjacentElement("afterbegin", fig);
            document.querySelector("#search").value = "";
            })
        .catch(err => {
            console.error(err);
        });
    });
}

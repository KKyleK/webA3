document.addEventListener("DOMContentLoaded", function () {

   const animation = document.querySelector("#loader");
   const old_display = animation.style.display;
   animation.style.display = "none";

   const url = "https://www.randyconnolly.com/funwebdev/3rd/api/colors/sample-colors.php";

   get_data(url);

   document.querySelector("article").addEventListener("click", e => {
      if (e.target.tagName === "BUTTON") {
         e.stopPropagation();
         show_selection(e.target.getAttribute("data-id"));
      }
   });

   show_selection(441);

   async function show_selection(id) {

      animation.style.display = old_display;   //show loading animation
      const response = await fetch(url);
      const data = await response.json();
      animation.style.display = "none";        //hide loading animation

      const scheme = data.find(c => c.id == id);

      const page = document.querySelector("fieldset");   //only need 1
      page.innerHTML = "";

      for (let s of scheme.scheme) {   //The different colors.

         const color_row = document.createElement("div");
         color_row.classList.add("colorRow");

         const detail_box = document.createElement("div");
         detail_box.classList.add("detailBox");
         detail_box.style.backgroundColor = `rgb(${s.color.red},${s.color.green},${s.color.blue})`;

         const id = document.createElement("span");
         id.textContent = s.web;
         const rgb = document.createElement("span");
         rgb.textContent = `rgb: (${s.color.red},${s.color.green},${s.color.blue})`;

         const color_name = document.createElement("label");
         color_name.textContent = s.name;

         color_row.appendChild(detail_box);
         color_row.appendChild(id);
         color_row.appendChild(rgb);
         color_row.appendChild(color_name);



         page.appendChild(color_row);
      }
      document.querySelector("aside h2").textContent = scheme.title;

   }






   //Gets the avalible color schemes.
   async function get_data(url) {

      const response = await fetch(url);
      const data = await response.json();

      const colors = document.querySelector("article");

      for (let d of data) {

         const section = document.createElement("section");
         section.classList.add("scheme");

         const description = document.createElement("h3");
         description.textContent = d.title;

         const preview = document.createElement("div");
         preview.classList.add("preview");


         for (let s of d.scheme) { //each scheme of colors

            const color = document.createElement("div");
            color.classList.add("color-box");
            color.style.backgroundColor = `rgb(${s.color.red},${s.color.green},${s.color.blue})`;

            preview.appendChild(color);
         }
         section.appendChild(preview);

         const actions = document.createElement("div");
         actions.classList.add("actions");
         const button = document.createElement("button");
         button.setAttribute("data-id", d.id);
         button.textContent = "View";
         actions.appendChild(button);

         section.appendChild(actions);

         colors.appendChild(description);
         colors.appendChild(section);
      }
   }
});



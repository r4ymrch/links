var delay = 300;
var links = [
   { id: "gh", url: "https://github.com/r4ymrch" },
   { id: "li", url: "https://www.linkedin.com/in/adnan-naufal-a88806435" },
   { id: "li-2", url: "https://www.linkedin.com/in/adnan-naufal-a88806435" },
   { id: "repo", url: "https://github.com/r4ymrch?tab=repositories" },
   { id: "x", url: "https://x.com/r4ymrch14" },
   { id: "x-2", url: "https://x.com/r4ymrch14" },
   { id: "dc", url: "https://discord.com/users/r4ymrch_" },
   { id: "dc-2", url: "https://discord.com/users/r4ymrch_" },
   { id: "fb", url: "https://www.facebook.com/share/19Ek4Mcgoc/" },
   { id: "fb-2", url: "https://www.facebook.com/share/19Ek4Mcgoc/" },
   { id: "wa", url: "https://wa.me/62895622345999" },
   { id: "email", url: "mailto:rymr.ch14@gmail.com" },
   { id: "ig", url: "https://www.instagram.com/radityo.h" }
];

links.forEach((item) => {
   const element = document.getElementById(item.id);

   if (element) {
      element.addEventListener("click", function () {
         if (item.url.startsWith("mailto:")) {
            window.location.href = item.url;
         } else {
            setTimeout(function () {
               window.location.href = item.url;
            }, delay);
         }
      });
   }
});

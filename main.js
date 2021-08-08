function elementler(){
  photo = document.getElementById('vesikalik');
  profile = document.querySelector(".photo-name");
  profile_name = document.querySelector(".name");
  profile_job = document.querySelector(".job");
  social = document.querySelector(".social");
  sideBar = document.querySelector("ul.nav_list");
  sidebarButtons = sideBar.querySelectorAll("li");
  sidebarNames = document.querySelectorAll(".links_name");
  closeButton = document.querySelector(".close-sidebar");
  sidebarDoc = document.querySelector(".sidebar");
}

function vesikalikCevirici(durum){
  if (durum == "ilk"){
    if (vesikalikZoomed==false){
      photo.style.transform = "rotate(0deg)"
    }
  }
  else if (durum == "son"){
    photo.style.transform = "rotate(360deg)"
  }
}
//Vesikalık fotosunun zoom hareketleri[2]
function vesikalikZoomer(){
  if (sidebarOpened==true){
    var isimAcici = function(){isimDuzenle("ac"); photo.removeEventListener("transitionend", isimAcici);};
    photo.addEventListener("transitionend", isimAcici);
    if (vesikalikZoomed == true){
      vesikalikZoomed = false;
      photo.style.width = "60px";
      photo.classList.remove("zoomout");
      photo.classList.add("zoomin");
      vesikalikCevirici("ilk");
      isimDuzenle("kapat")
      socialDuzenle("daralt");
    }
    else {
      vesikalikZoomed = true;
      photo.style.width = "232px";
      photo.classList.add("zoomout");
      photo.classList.remove("zoomin");
      vesikalikCevirici("son");
      isimDuzenle("kapat");
      socialDuzenle("uzat");
    }
  }
}
function isimDuzenle(durum){
      if (vesikalikZoomed == true){
        profile.style.display = "block";
        profile_name.style.marginLeft = "0px";
        profile_name.style.bottom = "-75px";
        photo.style.marginBottom = "75px";
        profile_name.style.setProperty("transform-origin", "left");
      }
      else{
        profile.style.display = "flex";
        profile_name.style.marginLeft = "68px";
        profile_name.style.bottom = "0";
        photo.style.marginBottom = "0";
        profile_name.style.setProperty("transform-origin", "top");
      }
  if (durum == "ac"){
    profile_name.style.transition = "0.5s";
    profile_name.style.opacity = "1";
    profile_job.style.transition = "0.5s";
    profile_job.style.opacity = "1";
    profile_name.style.width = "150px";
    profile_name.style.height = "75px";
  }
  else if (durum == "kapat"){
    profile_name.style.transition = "0s";
    profile_name.style.opacity = "0";
    profile_job.style.transition = "0s";
    profile_job.style.opacity = "0";
    if (vesikalikZoomed == true){
      profile_name.style.height = "0";
    }
    else if(vesikalikZoomed == false){
      profile_name.style.width = "0";
    }
  }
}
function socialDuzenle(durum){
  if (durum == "uzat"){
    social.style.marginLeft = "0px";
    social.style.width = "218px";
  }
  else if(durum == "daralt"){
    social.style.marginLeft = "68px";
    social.style.width = "150px";
  }
  else if(durum == "kapat"){
    social.style.marginLeft = "68px";
    social.style.width = "0px";
    social.style.marginLeft = "0px";
  }
  telefonNumarasi("boyut");
}

//Menüdeki itemlerin üstüne gelindiğindeki animasyonlar[2]
function sideBarUstuneGelme(everySidebarButton, durum){
  if (durum == "ustunde"){
    var yazi_rengi = "orange";
    var arkaplan_rengi = "white";
    var butongenislik = "227px";
    var solMarginEkle = "5px";
  }
  else if (durum == "degil"){
    var yazi_rengi = "white";
    var arkaplan_rengi = "orange";
    var butongenislik = "232px";
    var solMarginEkle = "0";
  }
  everySidebarButton.style.backgroundColor=arkaplan_rengi;
  yazi = everySidebarButton.querySelector("span").style;
  icon = everySidebarButton.querySelector("i").style;
  yazi.color = yazi_rengi;
  icon.color = yazi_rengi;
  if (sidebarOpened==true){
    everySidebarButton.style.width = butongenislik;
    everySidebarButton.style.marginLeft = solMarginEkle;
  }
  else{
    everySidebarButton.style.width="52px";
  }
}
function sidebarAcKapa(){
  sidebarOpened = !sidebarOpened;
  if (sidebarOpened==false){
    closeButton.style.transform = "scaleX(-1)";
    closeButton.style.right = "29px";
    document.querySelector("#cv-left").style.display = "none";
    document.querySelector(".logo_name").style.display = "none";
    sidebarDoc.style.width = "80px";
    for(let i = 0; i < sidebarNames.length; i++){
      sidebarButtons[i].style.width = "50px";
      sidebarNames[i].style.opacity = "0";
    }
    photo.style.width = "52px";
    vesikalikZoomed = false;
    isimDuzenle("kapat");
    socialDuzenle("kapat");
    photo.classList.remove("zoomin")
    photo.classList.remove("zoomout")
    vesikalikCevirici("ilk");
  }
  else{
    closeButton.style.transform = "scaleX(1)";
    closeButton.style.right = "10px";
    document.querySelector("#cv-left").style.display = "flex";
    document.querySelector(".logo_name").style.display = "flex";
    sidebarDoc.style.width = "260px";
    for(let i = 0; i < sidebarNames.length; i++){
      sidebarButtons[i].style.width = "232px";
      sidebarNames[i].style.opacity = "1";
    }
    isimDuzenle("ac")
    socialDuzenle("daralt");
    photo.style.width = "60px";
    photo.classList.add("zoomin")
  }
}
function telefonNumarasi(eylem){
  if (eylem == "boyut"){
    if (vesikalikZoomed == true){
      social.style.setProperty("--tel_solmargin", "55px");
    }
    else{
      social.style.setProperty("--tel_solmargin", "20px");
    }
  }
  if (eylem == "gorunurluk"){
    if (social.style.getPropertyValue("--widthofNumber")==0){
      social.style.setProperty("--widthofNumber", "130px");
    }
    else{
      social.style.setProperty("--widthofNumber", 0);
    }
  }
}

function scrollDinleyici(){
  window.removeEventListener("scroll", scrollDinleyici)
  ilkScroll = scrollPage;
  if ((document.body.getBoundingClientRect()).top > scrollPage * -1 * document.body.clientHeight){
    scrollPage -= 1;
  }
  else if((document.body.getBoundingClientRect()).top < scrollPage * -1 * document.body.clientHeight){
    scrollPage += 1;
  }
  clearInterval(scrollChecker);
  scrollWaitLimit = 2;
  scrollEventOrganizer(type="manual");
}
function sidebarScroll(page){
  window.removeEventListener("scroll", scrollDinleyici)
  scrollPage = page;
  ilkScroll=Math.floor(document.body.getBoundingClientRect().top/document.body.clientHeight * -1);
  clearInterval(scrollChecker);
  scrollWaitLimit = 0;
  scrollEventOrganizer(type="auto");
}
function scrollEventOrganizer(type){
  //Elle scroll yapıldığında eğer bir sayfa %80 gözüküyorsa direk o sayfaya scroll yapılır.
  var sayfadanCikmaToleransYuzdesi = 2/10;
  if (afterResizeScroll == false){
    scrollAnimationOpen = true;
    //Scroll gerçekleşirken aktif EventListener buga giriyor sayfa aşağı yukarı titreşim yapıyordu,
    //Interval'la belirli aralıklarla scroll un bitip bitmediği denetleniyor ve bitince EventListener yeniden ekleniyor.
    scrollChecker = setInterval(() => {
      if (((document.body.clientHeight * scrollPage * -1 === (document.body.getBoundingClientRect()).top)
          || (((document.body.clientHeight * scrollPage * -1 - (document.body.getBoundingClientRect()).top) < clientRectDisregard)
          && ((document.body.clientHeight * scrollPage * -1 - (document.body.getBoundingClientRect()).top) > -1*clientRectDisregard)))
          && (scrollWait >= scrollWaitLimit-1)){
        if ((document.body.clientHeight * scrollPage * -1 === (document.body.getBoundingClientRect()).top)  ){
          window.addEventListener("scroll", scrollDinleyici);
          scrollAnimationOpen = false;
          clearInterval(scrollChecker);
          scrollTimeCounter = 0;
          scrollWait = 0;
          intervalDonguSayac = 0;
        }
        else if ((document.body.clientHeight * scrollPage * -1 - (document.body.getBoundingClientRect()).top) < clientRectDisregard){
          if (scrollTimeCounter > scrollTimeCounterLimit){
            window.addEventListener("scroll", scrollDinleyici);
            scrollAnimationOpen = false;
            clearInterval(scrollChecker);
            scrollTimeCounter = 0;
            scrollWait = 0;
            intervalDonguSayac = 0;
          }
        }
      }
      //Fazla scroll yapınca görselliğin bozulmaması için eklendi.

      //Aşağı fazladan kaydırma
      else if (((ilkScroll < scrollPage) && (document.body.getBoundingClientRect().top < -1 * scrollPage * document.body.clientHeight))
              && (scrollWaitLimit != 0) && (type == "manual")){
        while(document.body.getBoundingClientRect().top < -1 * scrollPage * document.body.clientHeight){
          if (((document.body.getBoundingClientRect().top + scrollPage * document.body.clientHeight) * -1 > sayfadanCikmaToleransYuzdesi*document.body.clientHeight)){
            scrollPage++;
            if (scrollPage == 0){
              ilkScroll = scrollPage;
            }
            else{
              ilkScroll = scrollPage -1;
            }
          }
          else{
            break;
          }
        }
        if (scrollWait >= scrollWaitLimit){
          scrollWaitLimit = 4;
        }
      }
      //Yukarı fazladan kaydırma
      else if (((ilkScroll > scrollPage) && (document.body.getBoundingClientRect().top > -1 * scrollPage * document.body.clientHeight))
              && (scrollWaitLimit != 0) && (type == "manual")){
        while(document.body.getBoundingClientRect().top > -1 * scrollPage * document.body.clientHeight){
          if (((document.body.getBoundingClientRect().top + scrollPage * document.body.clientHeight) > sayfadanCikmaToleransYuzdesi*document.body.clientHeight)){
            scrollPage--;
            if (scrollPage == maxPageNumber){
              ilkScroll = scrollPage;
            }
            else{
              ilkScroll = scrollPage + 1;
            }
          }
          else{
            break;
          }
        }
        if (scrollWait >= scrollWaitLimit){
          scrollWaitLimit = 4;
        }
      }

      //Yukarı çıkarken aşağı inilirse scrollEvent kapalı olduğundan bunu algılayan ifade aşağıdadır:
        //ilkScroll'u scrollPage'in 1 eksiği yapar ki aşağı fazladan kaydırma ifadesi açılsın
      if ((document.body.clientHeight*(scrollPage+1)*-1 > document.body.getBoundingClientRect().top) && (type == "manual")){
        ilkScroll = scrollPage - 1;
        // console.log("assagiii", document.body.clientHeight*(scrollPage+1)*-1, ">", document.body.getBoundingClientRect().top)
      }
      //Üsttekinin tam tersi...
      else if ((document.body.clientHeight*(scrollPage-1)*-1 < document.body.getBoundingClientRect().top)  && (type == "manual")){
        ilkScroll = scrollPage + 1;
        // console.log("yukariii", document.body.clientHeight*(scrollPage+1)*-1, "<", document.body.getBoundingClientRect().top)
      }

      //Sayfada fazla scroll yapıldığı zaman buga girmemesi için yapıldı, diğer türlü scrollTo komutu gerçekleşmesine rağmen
      //Sayfa istenilen yere gelemeden scroll hakimiyetini kullanıcı ele geçiriyordu ve bundan Interval'dan çıkma komutu
      //asla gerçekleşmiyordu.
      if (oncekiScroll === (document.body.getBoundingClientRect()).top){
        if(scrollWait >= scrollWaitLimit-1){
          if ((intervalDonguSayac >= 5) && (type == "manual")){
            scrollPageBulucu();
          }
          window.scrollTo({
            left: 0,
            top: (document.body.clientHeight * scrollPage),
            behavior: "smooth"});
        }
        scrollTimeCounter++;
        scrollWait++;
      }
      else{
        scrollTimeCounter = 0;
        scrollWait = 0;
      }

      oncekiScroll = (document.body.getBoundingClientRect()).top;
      intervalDonguSayac++;
      // console.log(document.body.getBoundingClientRect().top, "top page:",document.body.clientHeight * scrollPage, "ilk page:",ilkScroll,"son page:",scrollPage, "önceki scroll:",oncekiScroll);
    }, 100)
  }
}
function resizeAutoScroll(){
  if(scrollAnimationOpen == false){
    if (document.body.clientHeight * scrollPage * -1 != (document.body.getBoundingClientRect()).top){
      window.removeEventListener("scroll", scrollDinleyici)
      if (eskiHeight === document.body.clientHeight){
        if (afterResizeScroll == false){
          afterResizeScroll = true;
          window.scrollTo({
            left: 0,
            top: (document.body.clientHeight * scrollPage),
            behavior: "smooth"});
          let scrollResizeBekle = setInterval(()=>{
            bugsayaci++;
            if ((document.body.clientHeight * scrollPage * -1 === (document.body.getBoundingClientRect()).top) || (((document.body.clientHeight * scrollPage * -1 - (document.body.getBoundingClientRect()).top) < clientRectDisregard) && isBugFixed == true)){
              window.addEventListener("scroll", scrollDinleyici);
              afterResizeScroll = false;
              clearInterval(scrollResizeBekle);
              bugsayaci = 0;
              isBugFixed = false;
            }
            if (bugsayaci > 20){
              window.scrollTo({
                left: 0,
                top: (document.body.clientHeight * scrollPage),
                behavior: "smooth"})
                bugsayaci = 0;
                isBugFixed = true;
            }
          }, 100)
        }
      }
    }
    eskiHeight = document.body.clientHeight;
    // console.log(scrollAnimationOpen, afterResizeScroll, eskiHeight)
    // console.log(document.body.clientHeight * scrollPage * -1, (document.body.getBoundingClientRect()).top)
  }
}

function scrollPageBulucu(){
  let sayfadaKalmaToleransDegeri = 6/10;
  let sayfadaKalmaDegeri = sayfadaKalmaToleransDegeri * document.body.clientHeight
  let topPageDifference = document.body.getBoundingClientRect().top - scrollPage * document.body.clientHeight * -1
  let floorOfPage = Math.floor(document.body.getBoundingClientRect().top *-1 / document.body.clientHeight)
  if (topPageDifference > 0){
    if (topPageDifference > sayfadaKalmaDegeri){
      scrollPage = floorOfPage;
    }
    else if (topPageDifference < sayfadaKalmaDegeri){
      scrollPage = floorOfPage + 1;
    }
  }
  else if (topPageDifference < 0){
    if (topPageDifference *-1 > sayfadaKalmaDegeri){
      scrollPage = floorOfPage + 1;
    }
    else if (topPageDifference *-1 < sayfadaKalmaDegeri){
      scrollPage = floorOfPage;
    }
  }
}

function rightbottomCornerDebug(){
  var debugIndexChanger = document.getElementById("debug");
  let first = String(window.outerHeight) +" "+ String(document.body.clientHeight) +" "+ String(document.body.clientHeight)
  let second = String(document.body.getBoundingClientRect().top) + " " + String(document.body.getBoundingClientRect().bottom) + " "
  debugIndexChanger.textContent = first + "\n" +  second;
}

function Dinleyiciler(){
  vesikalikZoomed = false;
  photo.addEventListener('mouseover', () => vesikalikCevirici("son"));
  photo.addEventListener('mouseout', function(){vesikalikCevirici("ilk");});
  for(let i = 0; i < sidebarButtons.length; i++){
    sidebarButtons[i].addEventListener("mouseover", () => sideBarUstuneGelme(sidebarButtons[i], "ustunde"));
    sidebarButtons[i].addEventListener("mouseout", () => sideBarUstuneGelme(sidebarButtons[i], "degil"));
  }
  photo.addEventListener('click', vesikalikZoomer);
  closeButton.addEventListener("click", sidebarAcKapa);
  social.classList.add("phoneNumber");
  social.querySelector("#phone").addEventListener("click", function(){telefonNumarasi("gorunurluk")});
  //content
  scrollPage = Math.floor(document.body.getBoundingClientRect().top/document.body.clientHeight * -1);
  window.addEventListener("scroll", scrollDinleyici);
  kariyerHedefi = document.getElementById("KariyerHedefi");
  beceriler = document.getElementById("Beceriler");
  egitim = document.getElementById("Egitim");
  sertifikalar = document.getElementById("Sertifikalar");
  projeler = document.getElementById("Projeler");
  isDeneyimi = document.getElementById("IsDeneyimi");
  var pageWidthListener = setInterval(resizeAutoScroll, 100)
  // var debugIndex = setInterval(rightbottomCornerDebug, 100)
}

window.onload = function(){
  elementler();
  Dinleyiciler();
}

var photo;
var sidebarButtons;
var vesikalikZoomed;
var profile;
var profile_name;
var social;
var closeButton;
var sidebarNames;
var sidebarOpened = false;
var sidebarDoc;
var kariyerHedefi;
var beceriler;
var egitim;
var sertifikalar;
var projeler;
var isDeneyimi;
//content
var scrollPage;
var oncekiScroll;
var ilkScroll;
var scrollChecker = setInterval(()=>{}, 1000);
var scrollAnimationOpen = false;
var eskiHeight;
var afterResizeScroll = false;
var bugsayaci = 0;
var clientRectDisregard = 5;
var isBugFixed = false;
var scrollTimeCounter = 0;
var scrollTimeCounterLimit = 10;
var scrollWait = 0;
var scrollWaitLimit;
var maxPageNumber = 5;
var intervalDonguSayac = 0;

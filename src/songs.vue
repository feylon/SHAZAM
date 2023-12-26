<template>
    <div class="container1">

        <div class="box">
           <nav class="home_nav">
               <div class="shazam_header ">
                   Shazam
               </div>
               <div class="right_nav">
                   <p class="pricing">
                       Pricing
                   </p>
                   <button class="join_discord"><i class="fab fa-discord"></i> Join Discord</button>
                   <button class="login_nav"><i class="fas fa-right-to-bracket"></i> Login </button>
               </div>
           </nav>
       
       
           <div class="content mt-3 row d-flex flex-wrap">
               <div class="col-4 content_left pb-5">
       
                   <div class="img d-flex justify-content-center w-100">
                   <img src="../vaqtincha/2. Хаски.jpg" class="img-fluid" alt="">
       
                </div>
                <div class="h4 text-center mt-4">
                    Lost
            </div>
       
            
                <div class="h6 mt-4 text-center">Lost sky visioun</div>
             
                <div class="play_icon_header">
                    <i class="fas fa-circle-play" title="Play"></i>
                    <i class="fas fa-circle-pause d-none"></i>
                </div>
            </div>
               <div class="col-8 right_menu">
                <div class="p3 Recommended">Recommended</div>
                <span class="foavvoruiter">
                Songs you like will be saved to your Favorites page.

</span>

<div class="buttons d-flex justify-content-around mt-2 w-50 align-items-center">
    <button class="save_playlist p-2    "><i class="fas fa-music"></i> Save Playlist</button>
    <button class="auto_play p-2"><i class="fas fa-play"></i> Auto play all songs</button>
</div>

    <div class="music_list w-100">
        <div class="item d-flex align-items-center">
            <div class="w-50 d-flex align-items-center ps-2 pt-3 pb-3  justify-content-start">
                <i class="fas fa-circle-play me-3" title="Play"></i>
            <div class="music_details ">
                <span class="artist text-center">
                    Obessed
                </span>
                <span class="title text-center">
                    Emdi & Veronica Bravo
                </span>

            </div>
            </div>
        </div>
    </div>

            </div>
       
       
           </div>
        </div>
    </div>
   
</template>
<script setup></script>
<style scoped lang="scss">
@import "song.scss";
@import "./../node_modules//bootstrap/dist/css/bootstrap.min.css";
%button_hover{
    background-color: #f3fff3;
    color:#2685dd; 
}
// *o'zgaruvchilar
.container1{
    
}
.box{
    // background-color: #f2f3f5;

    .home_nav{
    display: flex;
    margin-top: 10px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 10px 20px rgb(245, 242, 242);
.shazam_header{
font-weight: 700;
margin-left: 10px;
font-size: 25px;
text-transform: uppercase; 
color: rgb(22, 22, 22);
font-family: 'Poppins',"sans-serif";
      
}
.right_nav{
        display: flex;
        width: 35%;
        align-items: center;

        justify-content: space-evenly;



    .join_discord{
        width: 130px;
        height: 40px;
        background-color: #2685dd;
        cursor: pointer;
        border: 1px #2685dd solid;
        border-radius: 15px;
        color:white;
        font-weight: 600; 
        transition: 0.2s all ease;
        &:hover{@extend %button_hover}
    }
    .pricing{
        font-size: 25px;
        font-weight: 600;
        color: rgb(75, 71, 71);
    }
    .login_nav{
        width :80px;
        height: 40px;
        background-color: #2685dd;
        color: white;
        border:#2685dd 1px solid;
        font-weight: 600;
        border-radius: 13px;
        transition: 0.2s all ease;
        cursor: pointer;
        &:hover{
            @extend %button_hover
        }

    }
}



}
}
</style>
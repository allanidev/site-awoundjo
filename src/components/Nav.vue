<template>
    <div>
        <header class="header">

            <nav class="navbar navbar-expand-lg navbar-default navbar-fixed-top">
                
                <div class="container">
                    <router-link class="navbar-brand " to="/">
                         <img class="img-fluid img-responsive"  src="assets/images/logo-awoundjo-5.png" alt="M S Awoundjo"/>
                    </router-link>

                        

                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                        </button>

                        <div class="navbar-collapse collapse" id="navbarCollapse" style="">
                            
                            <ul class="navbar-nav ml-auto">

                                <li><router-link to="/">Acceuil</router-link></li>

                                <li><router-link to="/qui-peut-souscrire">Qui peut Souscrire</router-link></li>

                                <li><router-link to="/nos-offres">Nos Offres</router-link></li>

                                <li><router-link to="/simuler-un-devis">Mon Devis</router-link></li>

                                 <li><router-link to="#">Blog</router-link></li>

                                <li><router-link to="/devenir-partenaire">Devenir Partenaire</router-link></li>

                                

                                <li ><a href="" @click="changelink" class="discover-btn" target="blank">Adhérer</a></li>
                                

                            </ul>

                        </div>
                    
                </div>
                
            </nav>
            
        </header>
    </div>
</template>

<script>
export default {
    name: 'NavSection',

    data(){
        return{
            
            lien : 'https://compte.mutuelleawoundjo.com',
            lienandroid : 'https://bit.ly/3Cm46JJ',
            
           
        }

    },

    methods:{
         getOS(){
            
             var userAgent = window.navigator.userAgent,
                    platform = window.navigator?.userAgentData?.platform ?? window.navigator.platform,
                    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
                    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
                    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
                    os = null;

                if (macosPlatforms.indexOf(platform) !== -1) {
                    os = 'Mac OS';
                } else if (iosPlatforms.indexOf(platform) !== -1) {
                    os = 'IOS';
                } else if (windowsPlatforms.indexOf(platform) !== -1) {
                    os = 'Windows';
                } else if (/Android/.test(userAgent)) {
                    os = 'Android';
                } else if (!os && /Linux/.test(platform)) {
                    os = 'Linux';
                }

               this.OS = os;
         },
                


         changelink(){
             this.getOS();
            

            if(this.OS == "Windows" || this.OS == "Linux"){
                window.open ('https://compte.mutuelleawoundjo.com/web/index.php?view=signup')

            }
             if(this.OS == "IOS" || this.OS == "Android" ){
                window.open ('https://bit.ly/3Cm46JJ')
            }
            
        }
    },
    
}

</script>
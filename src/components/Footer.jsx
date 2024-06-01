// Header.js
import React from 'react';
import logo_sm from "/src/static/picture/logo-sm.svg"
import us from "/src/static/picture/us.jpg"
import spain from "/src/static/picture/spain.jpg"
import germany from "/src/static/picture/germany.jpg"
import russia from "/src/static/picture/russia.jpg"
import italy from "/src/static/picture/italy.jpg"
import avatar_1 from '/src/static/picture/avatar-1.jpg'

function Footer() {
  return (

    <footer class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">
                    <script>document.write(new Date().getFullYear())</script> © Minia.
                </div>
                <div class="col-sm-6">
                    <div class="text-sm-end d-none d-sm-block">
                        Design & Develop by <a href="#!" class="text-decoration-underline">Themesbrand</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
}

export default Footer;

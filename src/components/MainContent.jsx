// Header.js
import React from 'react';
import logo_sm from "/src/static/picture/logo-sm.svg"
import us from "/src/static/picture/us.jpg"
import spain from "/src/static/picture/spain.jpg"
import germany from "/src/static/picture/germany.jpg"
import russia from "/src/static/picture/russia.jpg"
import italy from "/src/static/picture/italy.jpg"
import avatar_1 from '/src/static/picture/avatar-1.jpg'

function Header() {
  return (

    <div class="main-content">

    <div class="page-content">
        <div class="container-fluid">

            {/* <!-- start page title --> */}
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0 font-size-18">Dashboard</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                <li class="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- end page title --> */}

            <div class="row">
                <div class="col-xl-3 col-md-6">
                    {/* <!-- card --> */}
                    <div class="card card-h-100">
                        {/* <!-- card body --> */}
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-6">
                                    <span class="text-muted mb-3 lh-1 d-block text-truncate">My Wallet</span>
                                    <h4 class="mb-3">
                                        $<span class="counter-value" data-target="865.2">0</span>k
                                    </h4>
                                </div>

                                <div class="col-6">
                                    <div id="mini-chart1" data-colors='["#5156be"]' class="apex-charts mb-2"></div>
                                </div>
                            </div>
                            <div class="text-nowrap">
                                <span class="badge bg-soft-success text-success">+$20.9k</span>
                                <span class="ms-1 text-muted font-size-13">Since last week</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


</div>
);
}

export default Header;

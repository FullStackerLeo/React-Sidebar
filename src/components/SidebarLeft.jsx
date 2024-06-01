// Header.js
import React from 'react';
import giftbox from "/src/static/picture/giftbox.png"
import us from "/src/static/picture/us.jpg"
import spain from "/src/static/picture/spain.jpg"
import germany from "/src/static/picture/germany.jpg"
import russia from "/src/static/picture/russia.jpg"
import italy from "/src/static/picture/italy.jpg"
import avatar_1 from '/src/static/picture/avatar-1.jpg'

function SidebarLeft() {
    return (

        <div class="vertical-menu">

            <div data-simplebar="" class="h-100">

                {/* <!--- Sidemenu --> */}
                <div id="sidebar-menu">
                    {/* <!-- Left Menu Start --> */}
                    <ul class="metismenu list-unstyled" id="side-menu">
                        <li class="menu-title" data-key="t-menu">Menu</li>

                        <li>
                            <a href="">
                                <i data-feather="home"></i>
                                <span data-key="t-dashboard">Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow">
                                <i data-feather="grid"></i>
                                <span data-key="t-apps">Apps</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li>
                                    <a href="apps-calendar.html">
                                        <span data-key="t-calendar">Calendar</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="apps-chat.html">
                                        <span data-key="t-chat">Chat</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" class="has-arrow">
                                        <span data-key="t-email">Email</span>
                                    </a>
                                    <ul class="sub-menu" aria-expanded="false">
                                        <li><a href="apps-email-inbox.html" data-key="t-inbox">Inbox</a></li>
                                        <li><a href="apps-email-read.html" data-key="t-read-email">Read Email</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);" class="has-arrow">
                                        <span data-key="t-invoices">Invoices</span>
                                    </a>
                                    <ul class="sub-menu" aria-expanded="false">
                                        <li><a href="apps-invoices-list.html" data-key="t-invoice-list">Invoice List</a></li>
                                        <li><a href="apps-invoices-detail.html" data-key="t-invoice-detail">Invoice Detail</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);" class="has-arrow">
                                        <span data-key="t-contacts">Contacts</span>
                                    </a>
                                    <ul class="sub-menu" aria-expanded="false">
                                        <li><a href="apps-contacts-grid.html" data-key="t-user-grid">User Grid</a></li>
                                        <li><a href="apps-contacts-list.html" data-key="t-user-list">User List</a></li>
                                        <li><a href="apps-contacts-profile.html" data-key="t-profile">Profile</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>


                    </ul>

                    <div class="card sidebar-alert border-0 text-center mx-4 mb-0 mt-5">
                        <div class="card-body">
                            <img src={giftbox} alt="" />

                            <div class="mt-4">
                                <h5 class="alertcard-title font-size-16">Unlimited Access</h5>
                                <p class="font-size-13">Upgrade your plan from a Free trial, to select ‘Business Plan’.</p>
                                <a href="#!" class="btn btn-primary mt-2">Upgrade Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Sidebar --> */}
            </div>
        </div>
    );
}

export default SidebarLeft;

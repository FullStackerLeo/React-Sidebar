// Header.js
import React from 'react';
import giftbox from "/src/static/picture/giftbox.png"

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
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,14a3,3,0,0,0-3,3v7.026h6V17A3,3,0,0,0,12,14Z"/><path d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H7V17a5,5,0,0,1,10,0v7.026h3.8a3.2,3.2,0,0,0,3.2-3.2v-10.4Z"/></svg>
                                <span data-key="t-dashboard">Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m6,6h3v3h-3v-3Zm9,12h3v-3h-3v3Zm-9,0h3v-3h-3v3Zm9-9h3v-3h-3v3Zm9-4v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-13,9.5c0-.827-.673-1.5-1.5-1.5h-4c-.827,0-1.5.673-1.5,1.5v4c0,.827.673,1.5,1.5,1.5h4c.827,0,1.5-.673,1.5-1.5v-4Zm0-9c0-.827-.673-1.5-1.5-1.5h-4c-.827,0-1.5.673-1.5,1.5v4c0,.827.673,1.5,1.5,1.5h4c.827,0,1.5-.673,1.5-1.5v-4Zm9,9c0-.827-.673-1.5-1.5-1.5h-4c-.827,0-1.5.673-1.5,1.5v4c0,.827.673,1.5,1.5,1.5h4c.827,0,1.5-.673,1.5-1.5v-4Zm0-9c0-.827-.673-1.5-1.5-1.5h-4c-.827,0-1.5.673-1.5,1.5v4c0,.827.673,1.5,1.5,1.5h4c.827,0,1.5-.673,1.5-1.5v-4Z"/></svg>
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

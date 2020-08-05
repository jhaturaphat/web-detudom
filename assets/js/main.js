
class Header extends HTMLElement  {
    connectedCallback(){
        this.innerHTML = `
        <nav>
        <div class="header">
            <div class="bar-menu">
                <i id="bar-menu" class="fas fa-bars"></i>
            </div>
            <div class="banner"> 
                <div>
                    <img src="assets/img/icon/logo.png">
                    <div class="link-logo">                    
                        <a href="index.html">detudom crown prince hospital</a> 
                        <a href="index.html">โรงพยาบาลสมเด็จพระยุพราชเดชอุดม</a>
                    </div>
                </div>                
                <div class="search">
                    <div class="input-search">
                        <input type="text">
                        <i class="fas fa-search"></i>
                    </div>                    
                    <ul>
                        <li><a href="#"><img src="assets/img/icon/icon-th.png" alt=""></a></li>
                        <li><a href="#"><img src="assets/img/icon/icon-en.png" alt=""></a></li>
                    </ul>
                </div>                 
            </div>
            <div class="nav-menu" id="nav-menu"> 
                <ul>
                    <li class=""><a href="">ข่าวประชาสัมพันธ์</a>
                        <ul class="dropdown-menu">
                            <li><a href="">ข่าวทั่วไป</a></li>
                            <li><a href="">สมัครงาน</a></li>
                            <li><a href="">จัดซื้อจัดจ้าง</a></li>
                            <li><a href="">กิจกรรมเฉลิมพระเกียรติ</a></li>
                        </ul>
                    </li>
                    <li class=""><a href="">บริการผู้ป่วย</a>
                        <ul class="dropdown-menu">
                            <li><a href="">ค้นหาแพทย์</a></li>
                            <li><a href="">ตารางออกตรวจ</a></li>
                            <li><a href="">ห้องพิเศษ</a></li>
                            <li><a href="">สิทธิผู้ป่วย</a></li>
                        </ul>
                    </li>
                    <li class=""><a href="">บริการของเรา</a>
                        <ul class="dropdown-menu">
                            <li><a href="">บริการทั่วไป</a></li>
                            <li><a href="">บริการพิเศษ</a></li>
                            <li><a href="">ธนาคารเลือด</a></li>
                            <li><a href="">แพทย์ไทย</a></li>
                            <li><a href="">สมทบทุน</a></li>
                        </ul>    
                    </li>  
                    <li class=""><a href="">เกี่ยวกับ รพ.</a>
                        <ul class="dropdown-menu">
                            <li><a href="">ประวัติโรงบาล</a></li>
                            <li><a href="">วิสัยทัศน์พันธกิจ</a></li>
                            <li><a href="">นโยบายและแผน</a></li>
                            <li><a href="">โครงสร้างองกร</a></li>
                            <li><a href="">เอกสารงานคุณภาพ</a></li>
                            <li><a href="">บุคลากร</a></li>
                        </ul>
                    </li>                    
                </ul>
            </div>
            
        </div>
    </nav>  
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer>
    <div class="ft-title">
        <div class="phone-number">
            <ul>
                <li><img src="assets/img/icon/phone.png" alt=""></li>
                <li>
                    <label for="">Call Center</label>
                    <label for="">045-3611334</label>
                </li>
            </ul>
        </div>
        <div class="info">
            <ul>
                <li>ติดตามข่าวสารโรงพยาบาลสมเด็จพระยุพราชเดชอุดม</li>
                <li>
                    <img src="assets/img/icon/facebook-icon.png" alt="">
                    <img src="assets/img/icon/youtube-icon.png" alt="">
                </li>
            </ul>            
        </div>
    </div>
    <!-- menu list -->
    <div class="ft-menu-item">
        <ul>
            ข่าวประชาสัมพันธ์
            <li><a href="#">ข่าวทั่วไป</a></li>
            <li><a href="#">สมัครงาน</a></li>
            <li><a href="#">จัดซื้อจัดจ้าง</a></li>
            <li><a href="#">กิจกรรมเฉลิมพระเกียรติ</a></li>
        </ul>
        <ul>
            บริการผู้ป่วย
            <li><a href="#">ค้นหาแพทย์</a></li>
            <li><a href="#">ตารางออกตรวจ</a></li>
            <li><a href="#">ห้องพิเศษ</a></li>
            <li><a href="#">สิทธิผู้ป่วย</a></li>
        </ul>
        <ul>
            บริการของเรา
            <li><a href="#">บริการทั่วไป</a></li>
            <li><a href="#">บริการพิเศษ</a></li>
            <li><a href="#">ธนาคารเลือด</a></li>
            <li><a href="#">แพทย์ไทย</a></li>
            <li><a href="#">สมทบทุน</a></li>
        </ul>
        <ul>
            เกี่ยวกับ รพ.
            <li><a href="#">ประวัติโรงบาล</a></li>
            <li><a href="#">วิสัยทัศน์พันธกิจ</a></li>
            <li><a href="#">นโยบายและแผน</a></li>
            <li><a href="#">โครงสร้างองกร</a></li> 
            <li><a href="#">เอกสารงานคุณภาพ</a></li>
            <li><a href="#">บุคลากร</a></li>
        </ul>
    </div>
</footer>
<div class="ft-bottom">
    โรงพยาบาลสมเด็จพระยุพราชเดชอุดม<br>
    299 หมู่ 19ต.เมืองเดช อ.เดชอุดม จ.อุบลราชธานี 34160 <br>
    โทรศัพท์ : 045-362028, 045-361993, 045-361971 <br>
    โทรสาร : 0-4536-2099
</div>
        `
    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
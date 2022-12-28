var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thanhnv@edmicro.vn', 
    // hotro@onluyen.vn - Edmicro@2022 ; thanhnv@edmicro.vn - 88Lj8!%zm94k
    // tranthihuongb_t58@hus.edu.vn,huongtt@edmicro.vn,ttopbg@gmail.com
    pass: '88Lj8!%zm94k'
  }
});

function sendMail() {

  let studentInfo = [
    {
     "name": "Đinh Xuân Trọng",
     "account": "trongdx45@ielts.onluyen.vn",
     "pass": 793968,
     "email": "break2go59@gmail.com"
    },
    {
     "name": "Trần Thanh Vân",
     "account": "vantt28@ielts.onluyen.vn",
     "pass": 935984,
     "email": "vanthanh94staff@gmail.com"
    }
   ];


  let i = 0;
  while ( i < studentInfo.length ) {
		
    let name = studentInfo[i].name;
    let account = studentInfo[i].account;
    let pass = studentInfo[i].pass;
    let email = studentInfo[i].email;

    var mailOptions = {
      from: 'thanhnv@edmicro.vn', // NOTE
      to: email,
      subject: '[AMC VIETNAM] Chúc mừng Tết Quý Mão 2023',
      html: '<div style="background-color: #eaebed; font-family: times, serif; font-size: 14pt; line-height: 1.8; margin: 0 auto; padding: 0 10%;"><!-- HEADER --><div class="header" style="padding: 50px;"><a href="https://postdrop.io" style="color: #ec0867; text-decoration: underline;"><img src="https://cdn.postdrop.io/starter-templates-v0/postdrop-logo-dark.png" alt="Postdrop" style="border: none; margin: 0 auto; display: block; width: 40%;"></a></div><!-- CONTENT --><div class="content" style="padding: 20px; background-color: white; border-radius: 10px; color: #125FA6;"><p>Kính gửi Quý Phụ huynh và Học sinh,</p><p>Một năm trôi qua với nhiều cung bậc cảm xúc, vào thời khắc chuyển giao khép lại năm cũ và mở ra những cơ hội mới, BTC kỳ thi AMC8 mong rằng Quý Phụ huynh và Học sinh có thể tận hưởng Tết nguyên đán theo cách riêng trọn vẹn nhất.</p><p>Chân thành cảm ơn Quý Phụ huynh và Học sinh đã đồng hành cùng BTC kỳ thi AMC8 trong năm qua, Chúng tôi sẽ không ngừng nỗ lực mang đến trải nghiệm và dịch vụ tốt nhất phục vụ Quý khách.</p><p>Xin kính chúc Quý Phụ huynh và Học sinh năm Quý Mão 2023 dồi dào sức khỏe, an khang - thịnh vượng - vạn sự như ý.</p><div class="account-info"><!-- display : flex; flex-direction : row; flex-wrap : wrap; justify-content : center; align-items : center; align-content : center; --><div class="account"><p style="font-size: 14pt;"><b>Tài khoản:</b></p><p style="font-weight: bold; cursor: text;"><span style="background-color: yellow; word-break: break-all">thanhnv34@ielts.onluyen.vn</span></p></div><div class="password"><p><b>Mật khẩu:</b></p><p style="font-weight: bold;"><span style="background-color: yellow;">874023</span></p></div></div><p>Trân trọng,</p><p>Ban tổ chức Kỳ thi Toán học Hoa Kỳ AMC8</p></div><!-- FOOTER --><div class="footer" style="color: #9e9e9e; text-align: center; font-size: 60%;"><p><a href="https://www.edmicro.vn/" style="text-decoration: none !important; color: inherit;">Edmicro</a>|<a href="https://www.onluyen.vn/" style="text-decoration: none !important; color: inherit;">Onluyen.vn</a></p><p>Tầng 5 tòa nhà Tây Hà, 19 Tố Hữu, Nam Từ Liêm, Hà Nội</p><p>0969 602 660</p></div></div>'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    i++;

  }

}

sendMail();
/* eslint-disable react/no-unescaped-entities */
import img1 from "../../public/photo_2026-06-12_10-50-36.jpg";
import img2 from "../../public/photo_2026-06-12_10-51-07.jpg";
import img3 from "../../public/photo_2026-06-12_10-51-11.jpg";

const Core = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff8fa",
        padding: "24px 16px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#e11d48",
            marginBottom: "40px",
            fontSize: "clamp(2rem,5vw,3rem)",
          }}
        >
          မမ အတွက်
        </h1>

        <img
          src={img1}
          alt=""
          style={{
            width: "100%",
            borderRadius: "24px",
            marginBottom: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          }}
        />

        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "24px",
            lineHeight: 2,
            color: "#444",
            marginBottom: "40px",
          }}
        >
          မမနဲ့ ဝေးသွားပြီးတဲ့နောက် မောင် တခြားလူတွေအများကြီးနဲ့
          တွေ့ခဲ့ပါသေးတယ်။ ဒါပေမဲ့ ဘယ်သူ့ဆီမှာမှ မမပေးခဲ့တဲ့ နွေးထွေးမှုမျိုး
          မောင်ရှာမတွေ့ခဲ့ဘူး။ အချန်တွေကြာလာလေ မမရဲ့တန်ဖိုးကို မောင်ပိုသိလာလေပဲ။
          မောင်တိုနှစ်ယောက်ကြားက အဆင်မပြေမှုတွေကို အခုဆို မောင်ပိုသိပြီး
          နားလည်ပေးနိုင်ပါပြီ။မောင့်ဘက်ကတော့ မမကို အများကြီးလွမ်းတယ်။မမအတွက်လည်း
          အဆင်ပြေမယ်ဆိုရင် မောင့်ဆီကို ပြန်လာခဲ့ပါနော်။မောင့်ကို
          စဉ်းစားပေးပါလားနော်။ပြန်လာခဲ့ပါနော် မမ🥺🫶🏻
        </div>

        <img
          src={img2}
          alt=""
          style={{
            width: "100%",
            borderRadius: "24px",
            marginBottom: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          }}
        />

        <div
          style={{
            background: "#fff",
            padding: "28px",
            borderRadius: "24px",
            lineHeight: 2,
            color: "#444",
            marginBottom: "40px",
          }}
        >
          အရင်က မောင့်ရဲ့ ရင့်ကျက်မှုမရှိခဲ့တဲ့ အပြုအမူတွေအတွက် တကယ်ကို
          စိတ်မကောင်းပါဘူးဗျာ။‌ မောင်တိုလမ်းခွဲပြီးတဲ့ အချိန်တွေမှာ
          မောင်ကိုယ်မောင် ပြန်ပြီး‌တော့ပြင်ဆင်ခဲ့ပါတယ်။ မမ မရှိတဲ့အခါ
          မောင်ဘာလုပ်"ဘာမှ ကိုအဆင်မပြေခဲ့ဘူးဗျာ။မောင်အရင်လို 24/7 လုံး
          မပြောတော့ပါဘူးနော်။ပြီးတော့ မမ စာကိုလည်း
          မထိခိုက်စေရပါဘူးဗျာ။မောင်အကုန်လုံးပြုပြင်ပြီးပါပြီ။
        </div>

        <img
          src={img3}
          alt=""
          style={{
            width: "100%",
            borderRadius: "24px",
            marginBottom: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          }}
        />

        <div
          style={{
            background: "linear-gradient(135deg,#e11d48,#fb7185)",
            color: "#fff",
            padding: "32px",
            borderRadius: "24px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <p
            style={{
              lineHeight: 2,
              margin: 0,
            }}
          >
            မောင့်ဘဝထဲမှာ မမရှိခဲ့တဲ့ အချိန်တွေက အကောင်းဆုံး အမှတ်တရတွေပဲ။
            ဘာအပိုစကားမှ မပြောချင်တော့ပါဘူး။ မမကိုပဲ ပြန်ချစ်ချင်တယ်။
          </p>
        </div>

        <div
          style={{
            textAlign: "center",
            color: "#e11d48",
            fontSize: "18px",
            lineHeight: 2,
            fontWeight: 400,
            padding: "20px",
          }}
        >
          အချစ်အတွက် အတ္တကြီးတယ်ဆိုတာ
          <br />
          အပြစ်မဟုတ်ဘူး အချစ်ရဲ့။
          <br />
          <br />
          ကလေးတွေလို ကိုယ့်အရုပ်လေးကို
          <br />
          သူများဆီ မပါစေချင်တာလေး တစ်ခုပဲ။
        </div>
      </div>
    </div>
  );
};

export default Core;

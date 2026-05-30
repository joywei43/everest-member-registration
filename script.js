const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwr5uYjgfcfcHecsngGZHHpepxK_M_Vy-ya1PhdQOpOuD996I8KDADrkdYSmUu6oqL_/exec";

const translations = {
  en: {
    title: "Welcome to Everest Poker Room",
    subtitle: "Member Registration",
    languageLabel: "Language",

    basicInfo: "Basic KYC Information",
    givenname: "Givenname *",
    middleName: "Middle Name",
    familyName: "Family Name *",
    nationality: "Nationality *",
    birthday: "Birthday *",
    idNumber: "Passport Number / ID Number *",
    email: "Email *",

    contactInfo: "Contact Information",
    mobileNumber: "Mobile Number *",
    mobilePlaceholder: "Mobile Number",

    referral: "Referral",
    referralMemberId: "Referral Member ID",

    termsTitle: "Terms and Agreement",
    termsText1:
      "I confirm that all information provided is true, complete, and accurate.",
    termsText2:
      "I agree to register as a member of Everest Poker Room.",
    termsText3:
      "I agree that Everest Poker Room may collect and use my personal information for membership registration, identity verification, customer service, and related operational purposes.",
    termsText4:
      "I understand that my membership registration may be reviewed and verified by Everest Poker Room staff.",

    submitButton: "Submit Registration",
    submittingButton: "Submitting...",
    requiredMessage: "Please complete all required fields and agree to all terms.",
    successMessage: "Registration submitted successfully.",
    failedMessage: "Submit failed. Please try again.",

    successTitle: "Thank you for registering",
    successText1:
      "Thank you for registering as a member of Everest Poker Room.",
    successText2:
      "Your registration has been received.",
    successText3:
      "Please visit the counter to provide your ID, complete verification, and receive your member number.",
    closeButton: "Close"
  },

  zh: {
    title: "歡迎加入 Everest Poker Room",
    subtitle: "會員註冊",
    languageLabel: "語言",

    basicInfo: "基本 KYC 資料",
    givenname: "名字 / Given Name *",
    middleName: "中間名",
    familyName: "姓氏 / Family Name *",
    nationality: "國籍 *",
    birthday: "生日 *",
    idNumber: "護照號碼 / 身分證號碼 *",
    email: "Email *",

    contactInfo: "聯絡方式",
    mobileNumber: "手機號碼 *",
    mobilePlaceholder: "手機號碼",

    referral: "推薦資訊",
    referralMemberId: "推薦會員 ID",

    termsTitle: "條款與同意事項",
    termsText1:
      "我確認所提供的所有資料皆為真實、完整且正確。",
    termsText2:
      "我同意註冊成為 Everest Poker Room 會員。",
    termsText3:
      "我同意 Everest Poker Room 蒐集並使用我的個人資料，用於會員註冊、身份確認、客戶服務及相關營運用途。",
    termsText4:
      "我了解我的會員註冊資料可能會由 Everest Poker Room 工作人員進行審核與確認。",

    submitButton: "送出註冊",
    submittingButton: "送出中...",
    requiredMessage: "請完成所有必填欄位，並勾選同意所有條款。",
    successMessage: "註冊資料已成功送出。",
    failedMessage: "送出失敗，請再試一次。",

    successTitle: "感謝您的註冊",
    successText1:
      "感謝您註冊成為 Everest Poker Room 會員。",
    successText2:
      "我們已收到您的會員註冊資料。",
    successText3:
      "請至櫃台提供ID完成身份確認並取得會員號碼。",
    closeButton: "關閉"
  },

  ja: {
    title: "Everest Poker Room へようこそ",
    subtitle: "会員登録",
    languageLabel: "言語",

    basicInfo: "基本KYC情報",
    givenname: "名 / Given Name *",
    middleName: "ミドルネーム",
    familyName: "姓 / Family Name *",
    nationality: "国籍 *",
    birthday: "生年月日 *",
    idNumber: "パスポート番号 / ID番号 *",
    email: "Email *",

    contactInfo: "連絡先情報",
    mobileNumber: "携帯番号 *",
    mobilePlaceholder: "携帯番号",

    referral: "紹介情報",
    referralMemberId: "紹介会員ID",

    termsTitle: "規約および同意事項",
    termsText1:
      "入力したすべての情報が真実、完全、かつ正確であることを確認します。",
    termsText2:
      "Everest Poker Room の会員として登録することに同意します。",
    termsText3:
      "Everest Poker Room が会員登録、本人確認、カスタマーサービス、および関連する運営目的のために個人情報を収集・使用することに同意します。",
    termsText4:
      "会員登録情報が Everest Poker Room のスタッフによって確認および審査される場合があることを理解します。",

    submitButton: "登録を送信",
    submittingButton: "送信中...",
    requiredMessage: "必須項目をすべて入力し、すべての規約に同意してください。",
    successMessage: "登録情報が送信されました。",
    failedMessage: "送信に失敗しました。もう一度お試しください。",

    successTitle: "ご登録ありがとうございます",
    successText1:
      "Everest Poker Room の会員登録ありがとうございます。",
    successText2:
      "登録情報を受け付けました。",
    successText3:
      "カウンターにてIDをご提示いただき、本人確認を完了後、会員番号をお受け取りください。",
    closeButton: "閉じる"
  },

  ko: {
    title: "Everest Poker Room에 오신 것을 환영합니다",
    subtitle: "회원 등록",
    languageLabel: "언어",

    basicInfo: "기본 KYC 정보",
    givenname: "이름 / Given Name *",
    middleName: "중간 이름",
    familyName: "성 / Family Name *",
    nationality: "국적 *",
    birthday: "생년월일 *",
    idNumber: "여권 번호 / 신분증 번호 *",
    email: "Email *",

    contactInfo: "연락처 정보",
    mobileNumber: "휴대폰 번호 *",
    mobilePlaceholder: "휴대폰 번호",

    referral: "추천 정보",
    referralMemberId: "추천 회원 ID",

    termsTitle: "약관 및 동의사항",
    termsText1:
      "제공한 모든 정보가 사실이며 완전하고 정확함을 확인합니다.",
    termsText2:
      "Everest Poker Room 회원으로 등록하는 것에 동의합니다.",
    termsText3:
      "Everest Poker Room이 회원 등록, 본인 확인, 고객 서비스 및 관련 운영 목적을 위해 개인정보를 수집하고 사용하는 것에 동의합니다.",
    termsText4:
      "회원 등록 정보가 Everest Poker Room 직원에 의해 검토 및 확인될 수 있음을 이해합니다.",

    submitButton: "등록 제출",
    submittingButton: "제출 중...",
    requiredMessage: "필수 항목을 모두 입력하고 모든 약관에 동의해 주세요.",
    successMessage: "등록 정보가 성공적으로 제출되었습니다.",
    failedMessage: "제출에 실패했습니다. 다시 시도해 주세요.",

    successTitle: "등록해 주셔서 감사합니다",
    successText1:
      "Everest Poker Room 회원으로 등록해 주셔서 감사합니다.",
    successText2:
      "회원 등록 정보가 접수되었습니다.",
    successText3:
      "카운터에서 ID를 제시하고 본인 확인을 완료한 후 회원 번호를 받아 주세요.",
    closeButton: "닫기"
  },

  th: {
    title: "ยินดีต้อนรับสู่ Everest Poker Room",
    subtitle: "สมัครสมาชิก",
    languageLabel: "ภาษา",

    basicInfo: "ข้อมูล KYC พื้นฐาน",
    givenname: "ชื่อ / Given Name *",
    middleName: "ชื่อกลาง",
    familyName: "นามสกุล / Family Name *",
    nationality: "สัญชาติ *",
    birthday: "วันเกิด *",
    idNumber: "หมายเลขหนังสือเดินทาง / หมายเลขบัตรประชาชน *",
    email: "Email *",

    contactInfo: "ข้อมูลติดต่อ",
    mobileNumber: "หมายเลขโทรศัพท์มือถือ *",
    mobilePlaceholder: "หมายเลขโทรศัพท์มือถือ",

    referral: "ข้อมูลผู้แนะนำ",
    referralMemberId: "รหัสสมาชิกผู้แนะนำ",

    termsTitle: "ข้อกำหนดและการยินยอม",
    termsText1:
      "ข้าพเจ้าขอยืนยันว่าข้อมูลทั้งหมดที่ให้ไว้เป็นความจริง ครบถ้วน และถูกต้อง",
    termsText2:
      "ข้าพเจ้ายินยอมสมัครเป็นสมาชิกของ Everest Poker Room",
    termsText3:
      "ข้าพเจ้ายินยอมให้ Everest Poker Room เก็บรวบรวมและใช้ข้อมูลส่วนบุคคลของข้าพเจ้าเพื่อการสมัครสมาชิก การยืนยันตัวตน การบริการลูกค้า และวัตถุประสงค์ด้านการดำเนินงานที่เกี่ยวข้อง",
    termsText4:
      "ข้าพเจ้าเข้าใจว่าข้อมูลการสมัครสมาชิกของข้าพเจ้าอาจได้รับการตรวจสอบและยืนยันโดยพนักงานของ Everest Poker Room",

    submitButton: "ส่งข้อมูลสมัครสมาชิก",
    submittingButton: "กำลังส่ง...",
    requiredMessage: "กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วนและยอมรับข้อกำหนดทั้งหมด",
    successMessage: "ส่งข้อมูลการสมัครเรียบร้อยแล้ว",
    failedMessage: "ส่งข้อมูลไม่สำเร็จ กรุณาลองอีกครั้ง",

    successTitle: "ขอบคุณสำหรับการสมัครสมาชิก",
    successText1:
      "ขอบคุณที่สมัครเป็นสมาชิกของ Everest Poker Room",
    successText2:
      "เราได้รับข้อมูลการสมัครสมาชิกของท่านแล้ว",
    successText3:
      "กรุณาแสดง ID ที่เคาน์เตอร์เพื่อยืนยันตัวตนและรับหมายเลขสมาชิก",
    closeButton: "ปิด"
  },

  vi: {
    title: "Chào mừng đến với Everest Poker Room",
    subtitle: "Đăng ký thành viên",
    languageLabel: "Ngôn ngữ",

    basicInfo: "Thông tin KYC cơ bản",
    givenname: "Tên / Given Name *",
    middleName: "Tên đệm",
    familyName: "Họ / Family Name *",
    nationality: "Quốc tịch *",
    birthday: "Ngày sinh *",
    idNumber: "Số hộ chiếu / Số ID *",
    email: "Email *",

    contactInfo: "Thông tin liên hệ",
    mobileNumber: "Số điện thoại di động *",
    mobilePlaceholder: "Số điện thoại di động",

    referral: "Thông tin giới thiệu",
    referralMemberId: "Mã thành viên giới thiệu",

    termsTitle: "Điều khoản và Thỏa thuận",
    termsText1:
      "Tôi xác nhận rằng tất cả thông tin đã cung cấp là đúng, đầy đủ và chính xác.",
    termsText2:
      "Tôi đồng ý đăng ký làm thành viên của Everest Poker Room.",
    termsText3:
      "Tôi đồng ý cho Everest Poker Room thu thập và sử dụng thông tin cá nhân của tôi cho mục đích đăng ký thành viên, xác minh danh tính, chăm sóc khách hàng và các hoạt động vận hành liên quan.",
    termsText4:
      "Tôi hiểu rằng thông tin đăng ký thành viên của tôi có thể được nhân viên Everest Poker Room xem xét và xác minh.",

    submitButton: "Gửi đăng ký",
    submittingButton: "Đang gửi...",
    requiredMessage: "Vui lòng điền đầy đủ các mục bắt buộc và đồng ý với tất cả điều khoản.",
    successMessage: "Thông tin đăng ký đã được gửi thành công.",
    failedMessage: "Gửi không thành công. Vui lòng thử lại.",

    successTitle: "Cảm ơn bạn đã đăng ký",
    successText1:
      "Cảm ơn bạn đã đăng ký làm thành viên của Everest Poker Room.",
    successText2:
      "Chúng tôi đã nhận được thông tin đăng ký thành viên của bạn.",
    successText3:
      "Vui lòng xuất trình ID tại quầy để hoàn tất xác minh và nhận mã số thành viên.",
    closeButton: "Đóng"
  }
};

const languageSelect = document.getElementById("language");
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const successModal = document.getElementById("successModal");
const closeSuccessModal = document.getElementById("closeSuccessModal");

function setLanguage(lang) {
  const selectedTranslations = translations[lang] || translations.en;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (selectedTranslations[key]) {
      element.textContent = selectedTranslations[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");

    if (selectedTranslations[key]) {
      element.placeholder = selectedTranslations[key];
    }
  });

  message.textContent = "";
}

languageSelect.addEventListener("change", function () {
  setLanguage(this.value);
});

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const lang = languageSelect.value;
  const t = translations[lang] || translations.en;

  if (!form.checkValidity()) {
    message.textContent = t.requiredMessage;
    message.style.color = "#f87171";
    form.reportValidity();
    return;
  }

  const submitButton = form.querySelector("button[type='submit']");
  submitButton.disabled = true;
  submitButton.textContent = t.submittingButton;

  const formData = new FormData(form);

  formData.append("language", lang);
  formData.append("agreement", "Yes");

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors"
    });

    message.textContent = "";

    form.reset();
    languageSelect.value = lang;
    setLanguage(lang);

    successModal.classList.remove("hidden");
  } catch (error) {
    console.error("Submit error:", error);
    message.textContent = t.failedMessage;
    message.style.color = "#f87171";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = t.submitButton;
  }
});

closeSuccessModal.addEventListener("click", function () {
  successModal.classList.add("hidden");
});

setLanguage("en");

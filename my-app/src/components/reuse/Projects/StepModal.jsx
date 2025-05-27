"use client";
import { useState, useEffect, useRef } from "react";

export default function StepModal({ isOpen, onClose, initialDirection }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    direction: initialDirection || "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setStatus(null);
      setFormData((prev) => ({
        ...prev,
        direction: initialDirection || "",
        name: "",
        email: "",
        phone: "",
        message: "",
      }));
      setFormErrors({});
      setSelectedFiles([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (initialDirection) {
      setFormData((prev) => ({ ...prev, direction: initialDirection }));
    }
  }, [initialDirection]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const validateStep = () => {
    const errors = {};
    if (step === 2 && !formData.name.trim()) errors.name = true;
    if (step === 3 && (!formData.email.trim() || !isValidEmail(formData.email)))
      errors.email = true;
    if (step === 4 && !formData.phone.trim()) errors.phone = true;
    if (step === 5 && !formData.message.trim()) errors.message = true;
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Обработчик выбора файлов
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      // Добавляем текстовые поля
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      // Добавляем файлы
      selectedFiles.forEach((file) => {
        formDataToSend.append("images", file);
      });

      const response = await fetch("/api/send-to-telegram", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
        }, 2000);

        // Очистка формы и файлов
        setFormData((prev) => ({
          ...prev,
          name: "",
          email: "",
          phone: "",
          message: "",
          direction: initialDirection || "",
        }));
        setSelectedFiles([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setStep(1);
        setFormErrors({});
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-xs bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-[400px] relative">
            <button
              onClick={onClose}
              className="absolute px-2 top-0 right-1 text-[40px] text-gray hover:text-black cursor-pointer"
            >
              ×
            </button>

            {step === 1 && (
              <div>
                <p className="text-black font-bold mb-4">
                  Вы выбрали направление:
                </p>
                <p className="text-dark-grey">{formData.direction}</p>
                <button className="btn-orange w-full mt-4" onClick={nextStep}>
                  Далее
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className=" text-black font-bold mb-4">Введите ваше имя</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-field w-full mb-1 border-[1px] rounded-[5px] p-2 ${
                    formErrors.name ? "border-red" : "border-dark-grey"
                  }`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mb-3">Поле обязательно</p>
                )}
                <div className="flex justify-between mt-4">
                  <button className="btn-grey" onClick={prevStep}>
                    Назад
                  </button>
                  <button className="btn-orange" onClick={nextStep}>
                    Далее
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <p className="text-black font-bold mb-4">Введите ваш E-mail</p>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field w-full mb-1 border-[1px] rounded-[5px] p-2 ${
                    formErrors.email ? "border-red" : "border-dark-grey"
                  }`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mb-3">
                    Введите корректный e-mail
                  </p>
                )}
                <div className="flex justify-between mt-4">
                  <button className="btn-grey" onClick={prevStep}>
                    Назад
                  </button>
                  <button className="btn-orange" onClick={nextStep}>
                    Далее
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <p className="text-black font-bold mb-4">Введите ваш телефон</p>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`input-field w-full mb-1 border-[1px] rounded-[5px] p-2 ${
                    formErrors.phone ? "border-red" : "border-dark-grey"
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-sm mb-3">Поле обязательно</p>
                )}
                <div className="flex justify-between mt-4">
                  <button className="btn-grey" onClick={prevStep}>
                    Назад
                  </button>
                  <button className="btn-orange" onClick={nextStep}>
                    Далее
                  </button>
                </div>
              </div>
            )}

            {step === 5 && (
              <form onSubmit={handleSubmit}>
                <p className="text-black font-bold mb-4">Введите сообщение</p>
                <textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={handleChange}
                  className={`resize-none input-field w-full mb-1 border-[1px] rounded-[5px] p-2 min-h-[150px] ${
                    formErrors.message ? "border-red" : "border-dark-grey"
                  }`}
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mb-3">Поле обязательно</p>
                )}

                {/* Файловый инпут */}
                <label className="block mb-2 mt-4 cursor-pointer text-blue-600">
                  <div className="flex items-center gap-2 hover:underline">
                    <svg
                      width="25"
                      height="12"
                      viewBox="0 0 25 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.3182 10.3636L6.25 10.3636C5.04447 10.3636 3.88832 9.9039 3.03588 9.08556C2.18344 8.26722 1.70455 7.15731 1.70455 6C1.70455 4.84269 2.18344 3.73278 3.03588 2.91444C3.88832 2.0961 5.04447 1.63636 6.25 1.63636L20.4545 1.63636C21.208 1.63636 21.9306 1.9237 22.4634 2.43516C22.9961 2.94663 23.2955 3.64032 23.2955 4.36364C23.2955 5.08695 22.9961 5.78065 22.4634 6.29211C21.9306 6.80357 21.208 7.09091 20.4545 7.09091L8.52273 7.09091C8.22135 7.09091 7.93231 6.97597 7.7192 6.77139C7.50609 6.5668 7.38636 6.28933 7.38636 6C7.38636 5.71067 7.50609 5.4332 7.7192 5.22861C7.93231 5.02403 8.22135 4.90909 8.52273 4.90909L19.3182 4.90909V3.27273L8.52273 3.27273C7.76927 3.27273 7.04667 3.56006 6.5139 4.07153C5.98113 4.58299 5.68182 5.27668 5.68182 6C5.68182 6.72332 5.98113 7.41701 6.5139 7.92847C7.04667 8.43994 7.76927 8.72727 8.52273 8.72727L20.4545 8.72727C21.6601 8.72727 22.8162 8.26753 23.6687 7.44919C24.5211 6.63085 25 5.52095 25 4.36364C25 3.20633 24.5211 2.09642 23.6687 1.27808C22.8162 0.459739 21.6601 0 20.4545 0L6.25 0C4.5924 0 3.00269 0.632141 1.83058 1.75736C0.65848 2.88258 0 4.4087 0 6C0 7.5913 0.65848 9.11742 1.83058 10.2426C3.00269 11.3679 4.5924 12 6.25 12L19.3182 12V10.3636Z"
                        fill="black"
                      />
                    </svg>

                    <span> Прикрепить изображения</span>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                  />
                </label>

                {/* Список выбранных файлов */}
                {selectedFiles.length > 0 && (
                  <ul className="mb-3 text-sm text-dark-grey list-disc pl-5 max-h-24 overflow-auto">
                    {selectedFiles.map((file, idx) => (
                      <li key={idx}>{file.name}</li>
                    ))}
                  </ul>
                )}

                <div className="flex justify-between mt-4">
                  <button type="button" className="btn-grey" onClick={prevStep}>
                    Назад
                  </button>
                  <button
                    type="submit"
                    className="btn-orange"
                    disabled={loading}
                  >
                    {loading ? "Отправка..." : "Отправить"}
                  </button>
                </div>
              </form>
            )}

            {status === "success" && (
              <p className="text-green-500 mt-4">Заявка успешно отправлена!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 mt-4">
                Ошибка отправки. Попробуйте снова.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

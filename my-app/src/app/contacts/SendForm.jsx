'use client'
import { useRef, useState } from 'react'

export default function SendForm({ closeModal }) {
  const [selectedFiles, setSelectedFiles] = useState([])
  const fileInputRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    mail: '',
    direction: 'Не выбрано',
  })

  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) errors.name = 'Укажите имя'
    if (!formData.phone.trim()) errors.phone = 'Укажите телефон'
    if (
      !formData.mail.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.mail)
    )
      errors.mail = 'Введите корректный email'
    if (!formData.message.trim()) errors.message = 'Напишите сообщение'

    return errors
  }

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
    setFormErrors({ ...formErrors, [field]: null })
  }

  const sendToTelegram = async (e) => {
    e.preventDefault()
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      for (const key in formData) {
        formDataToSend.append(key, formData[key])
      }

      const files = fileInputRef.current?.files || []
      for (let i = 0; i < files.length; i++) {
        formDataToSend.append('images', files[i])
      }

      const response = await fetch('/api/send-to-telegram', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        alert('Сообщение отправлено!')
        setFormData({
          name: '',
          phone: '',
          message: '',
          mail: '',
          direction: 'Не выбрано',
        })
        fileInputRef.current.value = ''
        setSelectedFiles([])
        setFormErrors({})
        closeModal()
      } else {
        throw new Error('Ошибка сервера')
      }
    } catch (error) {
      console.error('Ошибка:', error)
      alert('Ошибка отправки')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e) => {
  const files = Array.from(e.target.files)
  setSelectedFiles(files)
}

  return (
    <div>
      <span className='text-[30px] sm:text-[24px]'>Расскажите нам о проекте</span>
      <form onSubmit={sendToTelegram} encType="multipart/form-data" className="pt-[29px] sm:pt-10" aria-label="Форма обратной связи">
        <div className='sm:grid sm:grid-cols-2 sm:grid-rows-5 sm:gap-4 gap-6 flex flex-col'>

          <div>
            <label htmlFor="name" className="sr-only">Имя</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange('name')}
              placeholder="Имя"
              aria-required="true"
              aria-invalid={!!formErrors.name}
              aria-describedby={formErrors.name ? 'name-error' : undefined}
              className={`border-[1px] rounded-[5px] px-5 py-[14px] w-full ${formErrors.name ? 'border-red' : 'border-dark-grey'}`}
            />
            {formErrors.name && <p id="name-error" className="text-red text-sm mt-1" aria-live="polite">{formErrors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="sr-only">Телефон</label>
            <input
              id="phone"
              type="text"
              name="phone"
              inputMode="numeric"
              value={formData.phone}
              onChange={handleChange('phone')}
              placeholder="+7"
              aria-required="true"
              aria-invalid={!!formErrors.phone}
              aria-describedby={formErrors.phone ? 'phone-error' : undefined}
              className={`border-[1px] rounded-[5px] px-5 py-[14px] w-full ${formErrors.phone ? 'border-red' : 'border-dark-grey'}`}
            />
            {formErrors.phone && <p id="phone-error" className="text-red text-sm mt-1" aria-live="polite">{formErrors.phone}</p>}
          </div>

          <div className="col-span-2">
            <label htmlFor="email" className="sr-only">E-mail</label>
            <input
              id="email"
              type="email"
              inputMode="email"
              name="email"
              value={formData.mail}
              onChange={handleChange('mail')}
              placeholder="E-mail"
              aria-required="true"
              aria-invalid={!!formErrors.mail}
              aria-describedby={formErrors.mail ? 'email-error' : undefined}
              className={`w-full border-[1px] rounded-[5px] px-5 py-[14px] ${formErrors.mail ? 'border-red' : 'border-dark-grey'}`}
            />
            {formErrors.mail && <p id="email-error" className="text-red text-sm mt-1" aria-live="polite">{formErrors.mail}</p>}
          </div>

          <div className="col-span-2 row-span-3">
            <label htmlFor="message" className="sr-only">Сообщение</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange('message')}
              placeholder="Опишите задачу"
              aria-required="true"
              aria-invalid={!!formErrors.message}
              aria-describedby={formErrors.message ? 'message-error' : undefined}
              className={`w-full h-full border-[1px] rounded-[5px] px-5 py-[14px] sm:min-h-auto min-h-[133px] resize-none ${formErrors.message ? 'border-red' : 'border-dark-grey'}`}
            />
            {formErrors.message && <p id="message-error" className="text-red text-sm mt-1" aria-live="polite">{formErrors.message}</p>}
          </div>
        </div>

        <div className="flex items-center gap-[10px] w-fit mt-[29px] sm:mt-5 hover:underline">
          <label htmlFor="avatar" className="flex items-center gap-2 cursor-pointer">
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3182 10.3636L6.25 10.3636C5.04447 10.3636 3.88832 9.9039 3.03588 9.08556C2.18344 8.26722 1.70455 7.15731 1.70455 6C1.70455 4.84269 2.18344 3.73278 3.03588 2.91444C3.88832 2.0961 5.04447 1.63636 6.25 1.63636L20.4545 1.63636C21.208 1.63636 21.9306 1.9237 22.4634 2.43516C22.9961 2.94663 23.2955 3.64032 23.2955 4.36364C23.2955 5.08695 22.9961 5.78065 22.4634 6.29211C21.9306 6.80357 21.208 7.09091 20.4545 7.09091L8.52273 7.09091C8.22135 7.09091 7.93231 6.97597 7.7192 6.77139C7.50609 6.5668 7.38636 6.28933 7.38636 6C7.38636 5.71067 7.50609 5.4332 7.7192 5.22861C7.93231 5.02403 8.22135 4.90909 8.52273 4.90909L19.3182 4.90909V3.27273L8.52273 3.27273C7.76927 3.27273 7.04667 3.56006 6.5139 4.07153C5.98113 4.58299 5.68182 5.27668 5.68182 6C5.68182 6.72332 5.98113 7.41701 6.5139 7.92847C7.04667 8.43994 7.76927 8.72727 8.52273 8.72727L20.4545 8.72727C21.6601 8.72727 22.8162 8.26753 23.6687 7.44919C24.5211 6.63085 25 5.52095 25 4.36364C25 3.20633 24.5211 2.09642 23.6687 1.27808C22.8162 0.459739 21.6601 0 20.4545 0L6.25 0C4.5924 0 3.00269 0.632141 1.83058 1.75736C0.65848 2.88258 0 4.4087 0 6C0 7.5913 0.65848 9.11742 1.83058 10.2426C3.00269 11.3679 4.5924 12 6.25 12L19.3182 12V10.3636Z" fill="black"/>
            </svg>
            Прикрепить файл
          </label>
         <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
          multiple
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          aria-label="Прикрепить файл"
        />
        {selectedFiles.length > 0 && (
        <ul className="mt-2 text-sm text-dark-grey list-disc pl-5" aria-label="Список выбранных файлов">
          {selectedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}

        </div>

        <div className="flex justify-between sm:flex-row flex-col mt-8 sm:mt-10">
          <div className='flex w-full sm:w-3/5 items-start gap-[10px]'>
            <input
              className="checkbox-input rounded-none w-4 h-4"
              type="checkbox"
              id="check-7"
              required
              aria-required="true"
            />
            <label className="checkbox-label cursor-pointer" htmlFor="check-7">
              Отправляя форму, вы соглашаетесь с политикой обработки персональных данных
            </label>
          </div>

          <button
            type="submit"
            className="btn-orange w-[144px] mt-[29px] sm:mt-0"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </button>
        </div>
      </form>
    </div>
  )
}

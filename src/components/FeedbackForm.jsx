const FeedbackForm = ({ data, onSubmit }) => {
   const handleFormSubmit = (e) => {
      // eslint-disable-next-line no-unused-expressions
      e.preventDefault;
      const formData = new FormData(e.target.form);
      onSubmit(JSON.stringify(formData));
   };

   return (
      <form className='content__form contact-form' onSubmit={handleFormSubmit}>
         <div className='testing'>
            <p>Чем мы можем помочь?</p>
         </div>
         <div className='contact-form__input-group'>
            <input
               className='contact-form__input contact-form__input--radio'
               id='salutation-mr'
               name='salutation'
               type='radio'
               value='Мистер'
            />
            <label
               className='contact-form__label contact-form__label--radio'
               htmlFor='salutation-mr'
            >
               Мистер
            </label>
            <input
               className='contact-form__input contact-form__input--radio'
               id='salutation-mrs'
               name='salutation'
               type='radio'
               value='Мисис'
               defaultChecked
            />
            <label
               className='contact-form__label contact-form__label--radio'
               htmlFor='salutation-mrs'
            >
               Мисcис
            </label>
            <input
               className='contact-form__input contact-form__input--radio'
               id='salutation-ms'
               name='salutation'
               type='radio'
               value='Мис'
            />
            <label
               className='contact-form__label contact-form__label--radio'
               htmlFor='salutation-ms'
            >
               Мисc
            </label>
         </div>
         <div className='contact-form__input-group'>
            <label className='contact-form__label' htmlFor='name'>
               Имя
            </label>
            <input
               className='contact-form__input contact-form__input--text'
               id='name'
               name='name'
               type='text'
               defaultValue={data.name}
            />
         </div>
         <div className='contact-form__input-group'>
            <label className='contact-form__label' htmlFor='email'>
               Адрес электронной почты
            </label>
            <input
               className='contact-form__input contact-form__input--email'
               id='email'
               name='email'
               type='email'
               defaultValue={data.email}
            />
         </div>
         <div className='contact-form__input-group'>
            <label className='contact-form__label' htmlFor='subject'>
               Чем мы можем помочь?
            </label>
            <select
               className='contact-form__input contact-form__input--select'
               id='subject'
               name='subject'
            >
               <option>У меня проблема</option>
               <option defaultValue>У меня важный вопрос</option>
            </select>
         </div>
         <div className='contact-form__input-group'>
            <label className='contact-form__label' htmlFor='message'>
               Ваше сообщение
            </label>
            <textarea
               className='contact-form__input contact-form__input--textarea'
               id='message'
               name='message'
               rows='6'
               cols='65'
               defaultValue={data.message}
            ></textarea>
         </div>
         <div className='contact-form__input-group'>
            <p className='contact-form__label--checkbox-group'>Хочу получить:</p>
            <input
               className='contact-form__input contact-form__input--checkbox'
               id='snacks-pizza'
               name='snacks'
               type='checkbox'
               value='пицца'
            />
            <label
               className='contact-form__label contact-form__label--checkbox'
               htmlFor='snacks-pizza'
            >
               Пиццу
            </label>
            <input
               className='contact-form__input contact-form__input--checkbox'
               id='snacks-cake'
               name='snacks'
               type='checkbox'
               value='пирог'
               defaultChecked
            />
            <label
               className='contact-form__label contact-form__label--checkbox'
               htmlFor='snacks-cake'
            >
               Пирог
            </label>
         </div>
         <button className='contact-form__button' type='submit'>
            Отправить сообщение!
         </button>
         <output id='result' />
      </form>
   );
};

export default FeedbackForm;

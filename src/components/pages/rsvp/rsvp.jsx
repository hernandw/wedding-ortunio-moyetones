import IconEmail from '../../../assets/icons/IconEmail'
import IconPhone from '../../../assets/icons/IconPhone'
import FormElement from '../../FormElement'
import IconInfo from '../../IconInfo'
import './Rsvp.css'
import { Controller, useForm } from 'react-hook-form'

const Rsvp = () => {

  const onSubmit = (data) => {
    console.log(data)
  }

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      name: '',
      message: ''
    }
  })
  return (
    <div>
      <div className="pt-10 mx-auto xl:container">
        <div
          className="flex justify-center"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 0, 0, 0.7) 40%, rgba(252, 70, 107, 1) 100%)",
            height: "180px",
          }}
        >
          <h1 className="pt-12 text-2xl font-bold text-center text-white uppercase sm:text-4xl">
            Confirmar asistencia
          </h1>
        </div>
        <div className="px-4 mx-auto sm:w-2/3 lg:w-1/2">
          <div className="py-10 -mt-16 bg-white rounded-lg shadow-lg md:py-12 md:px-6">
            <div className="grid grid-cols-2 mx-auto mb-12 gap-x-6">
              <IconInfo icon={<IconEmail />} text={"ortuniomanuel@gmail.com"} />
              <IconInfo icon={<IconPhone />} text={"+56 9 1234 5678"} />
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  control={control}
                  name="name"
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <FormElement
                      type="text"
                      label="Nombre"
                      placeholder="Su nombre aqui..."
                      fieldRef={field}
                      hasError={errors.name?.type === "required"}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="email"
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <FormElement
                      type="email"
                      label="Correo"
                      placeholder="Su email aqui..."
                      fieldRef={field}
                      hasError={errors.email?.type === "required"}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="message"
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <FormElement
                      type="textarea"
                      label="Mensaje"
                      placeholder="Su mensaje aqui..."
                      fieldRef={field}
                      hasError={errors.message?.type === "required"}
                    />
                  )}
                />
                <button type='submit' className='w-full px-6 py-3 font-medium text-white uppercase bg-pink-600 rounded shadow-md hover:bg-pink-700 focus:outline-none focus:ring-0 active:bg-pink-800'>Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rsvp

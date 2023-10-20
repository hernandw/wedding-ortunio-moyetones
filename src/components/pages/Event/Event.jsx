import photoevent from '/assets/images/manu2.jpg'
import './Event.css'

const Event = () => {
  return (
    <div>
      <img className="photo" src={photoevent} alt="" />
      <h2 className="title__event">¡Bienvenidos a nuestro matrimonio!</h2>
      <p className="text-event">
        Sí! nos casamos!!! ¡Estamos super felices! Nos sentimos en las nubes y
        queremos compartir contigo todo nuestro amor. Por eso estamos preparando
        un matrimonio que hará historia y en el que lo pasarás genial.
      </p>
      <p className="text-event">
        ¡Mientras llega el gran día hemos creado esta web con un montón de
        secciones para que estés al día de todo y para compartir nuestra
        historia de amor.
      </p>
      <p className="text-event">
        Una cosa importante, en la sección asistencia puedes confirmar si vas al
        matrimonio o no. Confírmanos lo antes posible por favor, porque así nos
        será mucho más fácil organizarlo todo.
      </p>
      <p className="text-event">
        Disfruta la web y nos vemos muy pronto, mil besos!
      </p>

      <p className="date-event">Jueves, 28 de Marzo de 2024</p>

      <h3 className="title_ceremonia">Ceremonia</h3>
      <p className="text-2xl text-center">2:00 pm - 3:00 pm</p>
      <p className="text-2xl text-center">Osorno Avda Francia 2875</p>
      <p className="text-2xl text-center">Condominio xxxx</p>
      <div className="flex justify-center gap-8 mt-5 15px">
        <button className="button">Map</button>
        <button className="button">Agregar al Calendar</button>
      </div>

      <h3 className="title_ceremonia">Recepción</h3>
      <p className="text-2xl text-center">3:00 pm - 4:00 pm</p>
      <p className="text-2xl text-center">Restaurant xxxx</p>
      <p className="text-2xl text-center">avda no me acuerdo Puerto Varas</p>
      <div className="flex justify-center gap-8 mt-5 15px">
        <button className="button">Map</button>
        <button className="button">Agregar al Calendar</button>
      </div>
    </div>
  );
}

export default Event

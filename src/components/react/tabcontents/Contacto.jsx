import { Button, Textarea } from "@nextui-org/react";
import { contactoStyles } from "@js/customStyles";
import { nombreReglas, correoReglas, mensajeReglas } from "@js/rules";
import { Toaster } from "react-hot-toast";
import UnderlineInput from "@react/utils/UnderlineInput";
import { useEmailSender } from "@js/useEmailSender";

const Contacto = () => {
  const { register, handleSubmit, errors, sumbitEmail } = useEmailSender();
  
  return (
    <section className="techno__container__main__tabnav__list__container">
      <h2>Contacto</h2>
      <div className="techno__container__main__tabnav__list__container__contacto">
        <article className="techno__container__main__tabnav__list__container__contacto__info">
          <p>
            ¿Tienes alguna pregunta o simplemente quieres charlar sobre
            desarrollo web? ¡Estoy aquí para ayudarte! No dudes en enviarme un
            mensaje y te responderé lo antes posible. 😊
          </p>
        </article>
        <form onSubmit={handleSubmit(sumbitEmail)} className="techno__container__main__tabnav__list__container__contacto__form">
          <div className="techno__container__main__tabnav__list__container__contacto__form__row">
            <UnderlineInput
              tipo="text"
              label="Nombre Completo"
              placeholder="Escribe tu nombre completo"
              classGroup={contactoStyles}
              register={register}
              emailfield="nombrecompleto"
              reglas={nombreReglas}
              error={errors.correo}
            />
            <UnderlineInput
              tipo="email"
              label="Nombre Completo"
              placeholder="Escribe tu nombre completo"
              classGroup={contactoStyles}
              register={register}
              emailfield="correo"
              reglas={correoReglas}
              error={errors.correo}
            />
          </div>
          <Textarea
            label="Descripcion"
            placeholder="Escribe tu Mensaje"
            isClearable
            variant="underlined"
            classNames={contactoStyles}
            {...register("mensaje", mensajeReglas)}
            errorMessage={errors.mensaje?.message}
            isInvalid={errors.mensaje ? true : false}
          />
          <Button
            type="submit"
            size="md"
            className="text-default-100 hover:opacity-100 hover:text-background-100 w-full sm:w-fit"
            variant="ghost"            
          >
            Button
          </Button>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default Contacto;

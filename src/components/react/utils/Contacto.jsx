import { Button, Input, Textarea } from "@nextui-org/react";
import { nombreReglas, correoReglas, mensajeReglas } from "@js/arrays/rules";
import { useEmailSender } from "@js/hooks/useEmailSender";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.min.css';

const Contacto = () => {
  const { register, handleSubmit, errors, sumbitEmail } = useEmailSender();

  return (
    <>      
      <article>
        <p className="text-[clamp(0.875rem,_0.208vw_+_0.833rem,_1rem)]">
          ¿Tienes alguna pregunta o simplemente quieres charlar sobre desarrollo
          web? ¡Estoy aquí para ayudarte! No dudes en enviarme un mensaje y te
          responderé lo antes posible. 😊
        </p>
      </article>
      <form
        onSubmit={handleSubmit(sumbitEmail)}
        className="grid gap-4 place-items-center w-full"
      >
        <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
          <Input
            type="text"
            variant="faded"
            label="Nombre completo"
            {...register("nombrecompleto", nombreReglas)}
            isInvalid={errors.nombrecompleto ? true : false}
            errorMessage={errors.nombrecompleto?.message}
            classNames={{errorMessage: "dark:text-danger-600",label:"dark:group-data-[invalid]:!text-danger-600"}}
          />
          <Input
            type="email"
            variant="faded"
            label="Correo"
            {...register("correo", correoReglas)}
            isInvalid={errors.correo ? true : false}
            errorMessage={errors.correo?.message}
            classNames={{errorMessage: "dark:text-danger-600",label:"dark:group-data-[invalid]:!text-danger-600"}}
          />
        </div>
        <Textarea
          minRows={3}
          variant="faded"
          label="Mensaje"
          {...register("mensaje", mensajeReglas)}
          isInvalid={errors.mensaje ? true : false}
          errorMessage={errors.mensaje?.message}
          classNames={{errorMessage: "dark:text-danger-600",label:"dark:group-data-[invalid]:!text-danger-600"}}
        />
        <Button
          size="md"
          type="submit"
          variant="ghost"
          color="primary"
          className="w-full sm:w-fit"
        >
          Enviar
        </Button>
      </form>    
      <ToastContainer />
    </>
  );
};

export default Contacto;

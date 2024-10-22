import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toastErrorStyles, toastSuccessStyles } from "@js/customStyles";
import { toast } from "react-toastify";

export const useEmailSender = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombrecompleto: "",
      correo: "",
      mensaje: "",
    },
  });
  const sumbitEmail = (data, e) => {
    e.preventDefault();
    const params = {
      nombrecompleto: data.nombrecompleto,
      correo: data.correo,
      mensaje: data.mensaje,
    };

    const serviceId = import.meta.env.PUBLIC_SERVICE_ID;
    const templateId = import.meta.env.PUBLIC_TEMPLATE_ID;
    const apiKey = import.meta.env.PUBLIC_API_KEY;    
     emailjs.send(serviceId, templateId, params, apiKey).then(
      (result) => {
        console.log(result.text);
        toast.success("Tu mensaje ha sido enviado", toastSuccessStyles);
        reset();
      },
      (error) => {
        console.log(error.text);
        toast.error(
          "No se pudo enviar el correo electrónico. Inténtalo de nuevo.",
          toastErrorStyles
        );
      }
    ); 
  };
  return { register, handleSubmit, errors, sumbitEmail };
};

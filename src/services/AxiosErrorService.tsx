import axios, { AxiosError } from "axios";
import { NotificationType, notify } from "../components/Notification/Notification";

export const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError: AxiosError = error;

    if (axiosError.response) {
      // Ответ от сервера, но статус не в диапазоне 2xx
      const responseData: any = axiosError.response.data;

      if (responseData.error) {
        console.error('Server error:', responseData.error);

        if (Array.isArray(responseData.detail)) {
          console.error('Error details:');
          responseData.detail.forEach((detail: any) => {
            console.error(`Field: ${detail.field_name}, Error: ${detail.error}`);

            notify({
              message: `Field: ${detail.field_name}, Error: ${detail.error}` || '',
              type: NotificationType.Error,
            })
          });
        } else {
          if (responseData.detail) {
            notify({
              message: `${responseData.detail}` || '',
              type: NotificationType.Error,
            })
          }
        }
      } else {
        console.error('Unknown server error');
      }
    } else if (axiosError.request) {
      // Запрос был сделан, но ответ не получен
      console.error('No response from server');
    } else {
      // Произошла ошибка при настройке запроса
      console.error('Request error:', axiosError.message);
    }
  } else {
    // Не AxiosError
    console.error('Unknown error:', (error as Error).message);
  }
};

// import i18n from '@/i18n';
// import { notifications } from '@mantine/notifications';

function handleError(error: string) {
  // const { t } = i18n;
  // let title = t('handleError.title');

  switch (error) {
    case 'Email or password invalid':
      console.log('handleError: ' + error);
      // notifications.show({
      //   title,
      //   message: t('handleError.errorLogin'),
      //   color: 'red',
      // });
      break;
    case 'Email already exist':
      break;
    case 'Server error':
      break;
    case '"email" is not valid':
      break;
    case 'Unauthorized':
      break;
    default:
      break;
  }
}

export default handleError;

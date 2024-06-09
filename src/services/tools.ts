import jwtDecode from 'jwt-decode';
import axios from "axios";

export const getImageUrl = async (url:string) => {
	try {
		const response = await axios.get(url, {
			responseType: 'arraybuffer',
		});

		const contentType = response.headers['content-type'];
		const base64String = Buffer.from(response.data, 'base64');
		return {
			type: contentType,
			length: base64String.length,
			data: base64String
		};
	} catch (err) {
		//return { error: true };
	}
};

export const decodeJwtToEmail = async (token: string) => {
	try {
	  const decodedToken: any = jwtDecode(token);
	  return decodedToken.email
	} catch (error) {
	  console.error(error);
	}
  };

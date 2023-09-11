import axios from 'axios'

export const POST = async (request) => {
	const data = await request.json();
	const domain = data.domain;

	try {
		const params = new URLSearchParams();
			params.append('domain', data.domain);
			params.append('email', data.email);
            params.append('firstname', data.name);
            params.append('lastname', data.name);
            params.append('email', data.email);
            params.append('amount', data.offer);
            params.append('message', data.message);
            params.append('country_id', '1');
            params.append('password', '123456');
            params.append('country', "United States");
            params.append('field','EmailAddress');
            params.append('value',data.email);
			const checkexist = await axios.post('https://www.contrib.com/signup/checkexist', params);
			console.log(checkexist.data.success)
			if(checkexist.data.success == false){
				return new Response(JSON.stringify({status:false, message:'Your email is already associated with an existing Contrib account. And an existing offer is already submitted to this domain.'}), { status: 201 })
			}else{
				const saveoffer = await axios.post('https://www.contrib.com/forms/save_offer', params);
                console.log(saveoffer)
                return new Response(JSON.stringify({status:true}), { status: 201 })
				
			}

	} catch (error) {
			console.log('error',error)
			return new Response("An error occurred", { status: 500 });
	}
}
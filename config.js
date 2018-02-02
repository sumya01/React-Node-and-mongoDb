const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logFile = (msg) =>{
    console.log("******");
    console.log(msg);
    console.log("******");
}
export default{
    port: env.PORT || 5678
};

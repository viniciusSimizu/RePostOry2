export interface IJWTProvider {

    sign(id: string): Promise<string>;
    verify(token: string): Promise<any>;

}
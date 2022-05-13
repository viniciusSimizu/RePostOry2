export interface IEncodeProvider {
    encode(plain: string): Promise<string>;
    decode(plain: string, hashed: string): Promise<boolean>
}
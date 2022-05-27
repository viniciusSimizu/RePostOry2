export interface IFakeEncodeProvider {
    decodeCount: number;
    encodeCount: number;

    encode(plain: string): Promise<string>;
    decode(plain: string, hashed: string): Promise<boolean>;
}
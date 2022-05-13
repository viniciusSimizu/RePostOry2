export interface IUIDProvider {
    uidGenerate(): Promise<string>;
}
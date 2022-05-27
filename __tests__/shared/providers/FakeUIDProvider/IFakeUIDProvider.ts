export interface IFakeUIDProvider {
    uidGenerateCount: number;

    uidGenerate(): Promise<string>;
}
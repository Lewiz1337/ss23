type ActionType<T> = {
  type: string;
  payload: T;
};
type StatusType = null | 'loading' | 'error' | 'success';

interface JobType {
  id: number;
  profession: string;
  firm_name: string;
  town: Item;
  catalogues: Item[];
  type_of_work: Item;
  payment_to: number;
  payment_from: number;
  currency: string;
  published: number;
  vacancyRichText: string;
}

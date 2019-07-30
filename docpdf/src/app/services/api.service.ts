import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { Constantes } from '../models/constantes';
import { ApiResponse } from '../models/api.response';
import { Demande } from '../models/demande.model';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    login(loginPayload): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(Constantes.baseUrl + 'token/generate-token', loginPayload);
    }

    getDeclarations(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(Constantes.baseUrl + 'declarations/');
    }

    getDeclarationById(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(Constantes.baseUrl + 'declarations/' + id);
    }

    createDemande(demande: Demande): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(Constantes.baseUrl + 'demandes/', demande);
    }

    deleteDeclaration(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(Constantes.baseUrl + 'declarations/' + id);
    }
}
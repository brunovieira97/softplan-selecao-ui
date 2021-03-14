import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../model/pessoa.model';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css'],
})
export class PessoaPesquisaComponent implements OnInit {
  public urlEdit: string = `${environment.apiPath}/pessoas/`;
  public pessoas: Array<Pessoa> = new Array<Pessoa>();
  public tableColumns = ['id', 'nome', 'cpf', 'email', 'actions'];

  constructor(private pessoaService: PessoaService) {}

  public ngOnInit(): void {
    this.findPessoas();
  }

  public edit(id: number): void {}

  public delete(id: number): void {}

  private findPessoas(): void {
    this.pessoaService.findAll().subscribe((res) => {
      this.pessoas = res;
    });
  }
}

import {
  Container,
  ContainerPosts,
  BarraPesquisa,
  LogoTecnoTc,
  NovaPergunta,
  TextoNovaPergunta,
  QuestionCard,
  Send,
  IconSend,
  FormNewQuestion,
} from './styles';
import MenuComponent from '../../components/MenuComponent';
import InputSearchFeed from '../../components/InputSearchFeed';
import ImageLogo from '../../assets/logos/logo_fundo_roxo_png.png';
import Perfil from '../../assets/ImagesFeed/foto_perfil.png';
import Input from '../../components/InputFeed';
import Modal from '../../components/Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../../service/api';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, signOut } from '../../service/security';
import Loading from "../../components/Loading";
import SpinnerLoading from "../../components/SpinnerLoading";
import { format } from "date-fns";



function Answer({answer}) {

  console.log(answer)

  const student = getUser();

  return (
    <section>
      <header>
        <img src={answer.User.Student.profileImage || Perfil} alt="imagem de perfil" />
        <strong> 
        por{" "}
          {student.student.id === answer.User.id
            ? "Você"
            : answer.User.Student.name}
        </strong>
        <p>em {format(new Date(answer.createdAt), "dd/MM/yyyy 'às' HH:mm")} </p>
      </header>
      <p>{answer.description}</p>
    </section>
  );
}

function NewPost({handleReload, setIsLoading}) {
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const imageRef = useRef();

  const handleImage = (e) => {
    if (e.target.files[0]) {
      imageRef.current.src = URL.createObjectURL(e.target.files[0]);
      imageRef.current.style.display = "flex";
    } else {
      imageRef.current.src = "";
      imageRef.current.style.display = "none";
    }

    setImage(e.target.files[0]);
  };

  const handleInput = (e) => {
    setNewQuestion({ ...newQuestion, [e.target.id]: e.target.value });
  };

  const handleAddNewQuestion = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", newQuestion.title);
    data.append("description", newQuestion.description);

    if (image) data.append("image", image);

    setIsLoading(true);

    try {
      await api.post("/questions", data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });

      handleReload();
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  return (
    <FormNewQuestion onSubmit={handleAddNewQuestion}>
      <Input id="title" label="Título" value={newQuestion.title} handler={handleInput}/>
      <Input id="description" label="Descrição" value={newQuestion.description} handler={handleInput} />
      <input type="file" onChange={handleImage}/>
      <img alt="pré-visualização" ref={imageRef}/>
      <button>Postar</button>
    </FormNewQuestion>
  );
}

function Posts({ question, setIsLoading, setCurrentGist }) {
  const [showAnswers, setShowAnswers] = useState(false);

  const [newAnswer, setNewAnswer] = useState("");

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setAnswers(question.Answers);
  }, [question.Answers]);

  const qtdAnswers = answers.length;

  const handleAddAnswer = async (e) => {
    e.preventDefault();

    if (newAnswer.length < 10)
      return alert("A resposta deve ter no mínimo 10 caracteres");

    setIsLoading(true);

    try {
      const response = await api.post(`/questions/${question.id}/answers`, {
        description: newAnswer,
      });

      const aluno = getUser();

      const answerAdded = {
        id: response.data.id,
        description: newAnswer,
        createdAt: response.data.createdAt,
        Student: {
          id: aluno.student.id,
          name: aluno.student.name,
          image: aluno.student.profileImage,
        },
      };

      setAnswers([...answers, answerAdded]);

      setNewAnswer("");

      setIsLoading(false);
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  const student = getUser();
  return (
    <QuestionCard>
      <header>
        <img src={Perfil} alt="Imagem de perfil" />
        <strong> 
        por{" "}
          {student.user.id === question.UserId
            ? "Você"
            : question.User.Student.name} </strong>
        <p>em {format(new Date(question.createdAt), "dd/MM/yyyy 'às' HH:mm")} </p>
      </header>
      <section>
        <strong> {question.title} </strong>
        <p> {question.description} </p>
        {question.image && <img src={question.image} alt="Imagem da questão" />}
      </section>
      <footer>
        <h1 onClick={() => setShowAnswers(!showAnswers)}>  
        {qtdAnswers === 0 ? (
             "  Seja o primeiro a responder"
          ) : (
            <>
              {qtdAnswers}
              {qtdAnswers > 1 ? " Respostas" : " Resposta"}
            </>
          )}
        </h1>
        {showAnswers && (
          <>
            {answers.map((answer) => (
              <Answer answer={answer} />
            ))}
          </>
        )}
        <form onSubmit={handleAddAnswer}>
          <textarea placeholder="Digite sua resposta" value={newAnswer} onChange={(e) => setNewAnswer(e.target.value)}></textarea>
          <Send>
            <IconSend />
          </Send>
        </form>
      </footer>
    </QuestionCard>
  );
}

function Feed() {
  const history = useHistory();

  const [questions, setQuestions] = useState([]);

  const [reload, setReload] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingFeed, setIsLoadingFeed] = useState(false);

  const [showNewQuestion, setShowNewQuestion] = useState(false);

  const [page, setPage] = useState(1);

  const [totalQuestions, setTotalQuestions] = useState(0);

  const [search, setSearch] = useState('');

  const feedRef = useRef();

  const loadQuestions = async (reload) => {
    //se já tiver buscando,  não busca denovo
    if (isLoadingFeed) return;

    //se tiver chego no fim, não busca denovo
    if (totalQuestions > 0 && totalQuestions == questions.length) return;

    setIsLoadingFeed(true);

    const response = await api.get('/questionFeed', {
      params: { page: reload ? 1 : page },
    });

    setPage(page + 1);

    setQuestions([...questions, ...response.data]);

    setTotalQuestions(response.headers['x-total-count']);

    setIsLoadingFeed(false);
  };

  useEffect(() => {
    loadQuestions(true);
  }, [reload]);

  const handleSignOut = () => {
    signOut();

    history.replace('/');
  };

  const handleReload = () => {
    setShowNewQuestion(false);
    setIsLoading(false);
    setPage(1);
    setQuestions([]);
    setSearch('');
    setReload(Math.random());
  };

  const feedScrollObserver = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    if (scrollTop + clientHeight > scrollHeight - 100 && search.length < 3)
      loadQuestions();
  };

  const handleSearch = async (e) => {
    setSearch(e.target.value);

    if (e.target.value.length === 0) handleReload();

    if (e.target.value.length < 3) return;

    try {
      const response = await api.get('/questions', {
        params: { search: e.target.value },
      });

      console.log(response.data)

      setQuestions(response.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  return (
    <>
      {isLoading && <Loading />}
      <Container>
        {showNewQuestion && (
          <Modal title="Faça uma pergunta" handleClose={() => setShowNewQuestion(false)}>
            <NewPost  handleReload={handleReload}
            setIsLoading={setIsLoading} />
          </Modal>
        )}
        <MenuComponent />
        <BarraPesquisa>
          <LogoTecnoTc onClick={handleReload}>
            <img src={ImageLogo} alt="Logo" title="Logo" />
          </LogoTecnoTc>
          <InputSearchFeed handler={handleSearch} value={search} />
          <NovaPergunta>
            <TextoNovaPergunta>
              <p onClick={() => setShowNewQuestion(true)}> Nova Pergunta </p>
            </TextoNovaPergunta>
          </NovaPergunta>
        </BarraPesquisa>
        <ContainerPosts ref={feedRef} onScroll={feedScrollObserver}>
          {questions.length === 0 && search.length > 3 && "Nenhuma questão encontrada"}
          {questions.map((q) => (
             <Posts question={q}
             setIsLoading={setIsLoading}/>
          ))}
           {isLoadingFeed && <SpinnerLoading />}
            {totalQuestions > 0 &&
              totalQuestions === questions.length &&
              "Isso é tudo!"}
        </ContainerPosts>
      </Container>
    </>
  );
}

export default Feed;

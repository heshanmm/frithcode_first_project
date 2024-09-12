/*.statistics {
    background-color: #efeeff;
    display: flex;
    justify-content: space-around;
    padding: 50px 0;
    margin-top: 45px;
  }
  
  .statItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;
    font-family: Inter, sans-serif;
  }
  
  .statNumber {
    font-size: 128px;
    font-weight: 700;
  }
  
  .statLabel {
    font-size: 36px;
    font-weight: 300;
    margin-top: 10px;
  }
  
  @media (max-width: 991px) {
    .statistics {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  
    .statNumber {
      font-size: 40px;
    }
  
    .statLabel {
      font-size: 24px;
    }
  }*/
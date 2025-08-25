import React from 'react';
import './idcard.css';

const IDCard = ({ 
  name = "Keval Solankure", 
  role = "Big Data Analystics", 
  photo = "/meraphoto.jpg",
  company = "SRM University" 
}) => {
  return (
    <div className="id-card-container">
      {/* Strap */}
      <div className="strap"></div>
      
      {/* ID Card */}
      <div className="id-card">
        <div className="card-header">
          <div className="company-name">{company}</div>
        </div>
        
        <div className="card-body">
          <div className="photo-container">
            <img 
              src={photo} 
              alt={name}
              className="profile-photo"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iMzciIHI9IjE1IiBmaWxsPSIjOUIzOUY0Ii8+CjxwYXRoIGQ9Ik0yMCA3NUMyMCA2Ni43MTU3IDI2LjcxNTcgNjAgMzUgNjBINjVDNzMuMjg0MyA2MCA4MCA2Ni43MTU3IDgwIDc1VjgwSDIwVjc1WiIgZmlsbD0iIzlCMzlGNCIvPgo8L3N2Zz4K';
              }}
            />
          </div>
          
          <div className="card-info">
            <h3 className="name">{name}</h3>
            <p className="role">{role}</p>
          </div>
        </div>
        
        <div className="card-footer">
          <div className="id-number">ID: #001</div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;

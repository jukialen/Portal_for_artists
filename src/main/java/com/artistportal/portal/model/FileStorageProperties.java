package com.artistportal.portal.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "file_info")
public class FileStorageProperties {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long documentId;

    @ManyToOne
    private ApkUser user;

    private String fileName;

    private String fileType;

    private String uploadDir;

    private LocalDate uploadDate;

}
